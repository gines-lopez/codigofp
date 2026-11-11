<?php
/**
 * First-party proxy for Umami Cloud, so ad blockers don't drop the analytics.
 * https://docs.umami.is/docs/bypass-ad-blockers#proxying
 *
 *   GET  /m/c.php           -> https://cloud.umami.is/script.js   (cached 12 h)
 *   POST /m/c.php/api/send  -> https://gateway.umami.is/api/send
 *
 * BaseHead.astro loads this file as the tracker and sets
 * data-host-url="/m/c.php", so the tracker posts to /m/c.php/api/send.
 * Plesk serves PHP from nginx, which passes the "/api/send" suffix as PATH_INFO.
 */

const SCRIPT_URL = 'https://cloud.umami.is/script.js';
const SEND_URL = 'https://gateway.umami.is/api/send';
const SCRIPT_TTL = 43200; // 12 h

header('X-Content-Type-Options: nosniff');

function upstream(string $url, string $method = 'GET', ?string $body = null, array $headers = []): array
{
	$ch = curl_init($url);
	curl_setopt_array($ch, [
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_CUSTOMREQUEST => $method,
		CURLOPT_HTTPHEADER => $headers,
		CURLOPT_CONNECTTIMEOUT => 5,
		CURLOPT_TIMEOUT => 10,
		CURLOPT_FOLLOWLOCATION => true,
		CURLOPT_ENCODING => '',
	]);
	if ($body !== null) {
		curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
	}
	$out = curl_exec($ch);
	$status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
	$type = (string) curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
	return [$out === false ? null : $out, $status, $type];
}

$path = $_SERVER['PATH_INFO'] ?? '';
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

// Event collection.
if ($path === '/api/send') {
	if ($method === 'OPTIONS') {
		http_response_code(204);
		exit;
	}
	if ($method !== 'POST') {
		http_response_code(405);
		exit;
	}
	$body = file_get_contents('php://input', false, null, 0, 65536);
	$ip = $_SERVER['REMOTE_ADDR'] ?? '';
	[$out, $status, $type] = upstream(SEND_URL, 'POST', $body, [
		'Content-Type: application/json',
		'User-Agent: ' . ($_SERVER['HTTP_USER_AGENT'] ?? ''),
		'Accept-Language: ' . ($_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? ''),
		'X-Forwarded-For: ' . $ip,
		'X-Real-IP: ' . $ip,
	]);
	header('Cache-Control: no-store');
	if ($out === null) {
		http_response_code(502);
		exit;
	}
	http_response_code($status ?: 502);
	header('Content-Type: ' . ($type ?: 'application/json'));
	echo $out;
	exit;
}

if ($path !== '' && $path !== '/') {
	http_response_code(404);
	exit;
}

// Tracker script, cached on disk so most page views never hit Umami.
$cache = sys_get_temp_dir() . '/codigofp-umami-script.js';
$fresh = is_file($cache) && (time() - filemtime($cache) < SCRIPT_TTL);
$js = $fresh ? file_get_contents($cache) : null;

if ($js === null || $js === false) {
	[$out, $status] = upstream(SCRIPT_URL);
	if ($out !== null && $status === 200) {
		$js = $out;
		@file_put_contents($cache, $js, LOCK_EX);
	} elseif (is_file($cache)) {
		$js = file_get_contents($cache); // Umami down: serve the stale copy.
	}
}

if (!$js) {
	http_response_code(502);
	exit;
}

header('Content-Type: application/javascript; charset=utf-8');
header('Cache-Control: public, max-age=3600');
echo $js;
