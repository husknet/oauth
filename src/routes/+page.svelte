<script>
	const clientId = import.meta.env.VITE_MICROSOFT_CLIENT_ID;
	const redirectUri = import.meta.env.VITE_REDIRECT_URI;

	const loginUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&response_mode=query&scope=openid%20profile%20email%20User.Read&state=custom123`;
</script>

<style>
	main {
		background: #0078D4;
		color: white;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: sans-serif;
	}
	a {
		color: white;
		font-size: 1.5rem;
		text-decoration: none;
		background: #005a9e;
		padding: 1rem 2rem;
		border-radius: 8px;
	}
</style>

<main>
	<h1>Sign in with Microsoft</h1>
	<a href={loginUrl}>Continue</a>
</main>
