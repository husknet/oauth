import { redirect } from '@sveltejs/kit';

export async function GET() {
	const finalUrl = process.env.FINAL_REDIRECT_URI;

	if (!finalUrl) {
		return new Response('Missing FINAL_REDIRECT_URI in environment variables', { status: 500 });
	}

	throw redirect(302, finalUrl);
}
