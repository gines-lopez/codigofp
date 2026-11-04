// Buttons that send the reader back to the page's first form instead of repeating it.
// Mark the link with data-scroll-to-form and point its href at the form's email input (or a
// wrapper around it): it scrolls smoothly (instantly with reduced motion) and focuses the field.
for (const link of document.querySelectorAll<HTMLAnchorElement>('a[data-scroll-to-form]')) {
	link.addEventListener('click', (event) => {
		const hash = link.getAttribute('href') ?? '';
		const target = hash.startsWith('#') ? document.getElementById(hash.slice(1)) : null;
		if (!target) return;
		event.preventDefault();
		const input =
			target instanceof HTMLInputElement
				? target
				: target.querySelector<HTMLInputElement>('input[type="email"]');
		const block = target.closest('form') ?? target;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		block.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
		input?.focus({ preventScroll: true });
		history.replaceState(null, '', hash);
	});
}
