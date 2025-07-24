// api/callback.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const code = req.query.code;
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI;

  if (!code) return res.status(400).send('Missing code');

  // Step 1: Exchange code for token
  const tokenRes = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code'
    })
  });

  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;

  // Step 2: Fetch user info from Microsoft Graph
  const userRes = await fetch('https://graph.microsoft.com/v1.0/me', {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  const user = await userRes.json();

  const email = user.mail || user.userPrincipalName;
  const name = user.displayName || 'User';

  // Step 3: Redirect to your shop with user info
  res.redirect(`https://ourshop.com/welcome?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`);
}
