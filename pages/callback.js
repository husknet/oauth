// pages/callback.js

export async function getServerSideProps(context) {
  const code = context.query.code;

  if (!code) {
    return {
      notFound: true,
    };
  }

  const tokenRes = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: 'authorization_code'
    })
  });

  const tokenData = await tokenRes.json();

  if (!tokenData.access_token) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }

  const accessToken = tokenData.access_token;

  const userRes = await fetch('https://graph.microsoft.com/v1.0/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const user = await userRes.json();
  const email = user.mail || user.userPrincipalName;
  const name = user.displayName || 'User';

  return {
    redirect: {
      destination: `https://ourshop.com/welcome?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`,
      permanent: false
    }
  };
}

export default function Callback() {
  return (
    <div style={{
      backgroundColor: '#0078D4',
      color: '#FFFFFF',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      fontSize: '1.5rem'
    }}>
      Signing you in…
    </div>
  );
}
