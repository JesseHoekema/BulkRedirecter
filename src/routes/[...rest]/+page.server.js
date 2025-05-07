import { redirect } from '@sveltejs/kit';

export function load({ params, url }) {
	const redirectUrl = import.meta.env.VITE_REDIRECT_URL;
	if (!redirectUrl) {
		throw new Error('VITE_REDIRECT_URL is niet ingesteld in .env');
	}
	const fullPath = params.rest ? `/${params.rest}` : '';
	throw redirect(301, `${redirectUrl}${fullPath}${url.search}`);
}
