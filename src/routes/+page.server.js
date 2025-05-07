import { redirect } from '@sveltejs/kit';

export function load() {
	const redirectUrl = import.meta.env.VITE_REDIRECT_URL;
	if (!redirectUrl) {
		throw new Error('VITE_REDIRECT_URL is niet ingesteld in .env');
	}
	throw redirect(301, redirectUrl);
}
