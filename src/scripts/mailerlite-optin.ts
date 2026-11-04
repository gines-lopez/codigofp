// Landing opt-in forms (.brand-optin) subscribe through MailerLite without leaving the page.
// They send the same fields as MailerLite's own embed script (form fields + ajax=1) to the
// form's action and, on success, go to /gracias/ (the embed's redirect). On failure the
// button comes back and a message explains what to do. Without JS the form still posts natively.
const SUCCESS_URL = '/gracias/';
const ERROR_TEXT = 'No he podido apuntarte. Revisa que el email esté bien escrito y vuelve a probar en unos segundos.';

const forms = document.querySelectorAll<HTMLFormElement>('form.brand-optin');

for (const form of forms) {
	const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
	if (!button) continue;
	const label = button.textContent ?? '';

	const error = document.createElement('p');
	error.className = 'brand-optin-error';
	error.setAttribute('role', 'alert');
	error.hidden = true;
	form.querySelector('.brand-optin-row')?.after(error);

	const reset = () => {
		button.disabled = false;
		button.textContent = label;
	};

	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		if (button.disabled) return;
		button.disabled = true;
		button.textContent = 'Enviando…';
		error.hidden = true;

		const body = new URLSearchParams();
		for (const [key, value] of new FormData(form)) body.append(key, String(value));
		body.append('ajax', '1');

		try {
			const response = await fetch(form.action, { method: 'POST', body });
			const data = await response.json();
			if (!data?.success) throw new Error('MailerLite rejected the subscription');
			location.assign(SUCCESS_URL);
		} catch {
			reset();
			error.textContent = ERROR_TEXT;
			error.hidden = false;
		}
	});

	// Coming back with the back button restores the form.
	window.addEventListener('pageshow', (event) => {
		if (event.persisted) reset();
	});
}
