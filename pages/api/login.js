export default async function handler(req, res) {
  const CLIENT_ID = process.env.CLIENT_ID;
  const REDIRECT_URI = process.env.REDIRECT_URI;

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    response_mode: "query",
    scope: "User.Read",
    state: "custom123"
  });

  res.redirect(`https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params.toString()}`);
}
