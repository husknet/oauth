// src/routes/callback/+page.server.js
import { redirect } from '@sveltejs/kit';
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const code = url.searchParams.get('code');
	if (!code) throw redirect(302, '/?error=missing_code');

	// 1. Exchange authorization code for access token
	const tokenRes = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			client_id: process.env.MICROSOFT_CLIENT_ID,
			client_secret: process.env.MICROSOFT_CLIENT_SECRET,
			code,
			redirect_uri: process.env.REDIRECT_URI,
			grant_type: 'authorization_code'
		})
	});

	const tokenData = await tokenRes.json();
	if (!tokenData.access_token) throw redirect(302, '/?error=token_exchange_failed');

	// 2. Get user profile from Microsoft Graph API
	const userRes = await fetch('https://graph.microsoft.com/v1.0/me', {
		headers: {
			Authorization: `Bearer ${tokenData.access_token}`
		}
	});

	const user = await userRes.json();
	const email = user.mail || user.userPrincipalName || '';
	const name = user.displayName || 'User';

	// 3. Safely construct redirect URI
	const base = process.env.FINAL_REDIRECT_URI;
	if (!base) throw redirect(302, '/?error=missing_redirect_env');

	const redirectUrl = `${base}?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`;

	// 4. Final redirect
	throw redirect(302, redirectUrl);
}
