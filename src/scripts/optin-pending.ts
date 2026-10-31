// Landing opt-in forms post straight to Kit: show that the tap registered and block a second
// submit on slow connections. Restores the button if the visitor comes back with the back button.
const forms = document.querySelectorAll<HTMLFormElement>('form.brand-optin');

for (const form of forms) {
	const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
	if (!button) continue;
	const label = button.textContent ?? '';

	form.addEventListener('submit', () => {
		button.disabled = true;
		button.textContent = 'Enviando…';
	});

	window.addEventListener('pageshow', (event) => {
		if (event.persisted) {
			button.disabled = false;
			button.textContent = label;
		}
	});
}
