<script>
	import { page } from '$app/stores';

	$: email = encodeURIComponent($page.url.searchParams.get('email') || '');
	$: name = encodeURIComponent($page.url.searchParams.get('name') || 'User');

	if (typeof window !== 'undefined') {
		window.location.href = `https://sxpersales.net?email=${email}&name=${name}`;
	}
</script>

<style>
	main {
		background: linear-gradient(to bottom right, #0077be, #00c6ff);
		color: white;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-family: 'Segoe UI', sans-serif;
		text-align: center;
		animation: pulse 2s infinite;
	}
	h1 {
		font-size: 2rem;
	}
	@keyframes pulse {
		0% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
		100% { background-position: 0% 50%; }
	}
</style>

<main>
	<h1>Redirecting you to your personal shop…</h1>
	<p>Please wait a moment</p>
</main>
