<script lang="ts">
	import { onMount } from 'svelte';
	const redirectUrl = import.meta.env.VITE_FINAL_REDIRECT_URI;

	onMount(() => {
		// Delay briefly to show the animation
		setTimeout(() => {
			window.location.href = redirectUrl;
		}, 2500);
	});
</script>

<style>
	main {
		height: 100vh;
		background: linear-gradient(135deg, #0078d4, #00b4ff);
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		font-family: 'Segoe UI', sans-serif;
		overflow: hidden;
		position: relative;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.loading-spinner {
		width: 60px;
		height: 60px;
		border: 6px solid rgba(255, 255, 255, 0.2);
		border-top: 6px solid white;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-top: 1.5rem;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.waves {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 150px;
		overflow: hidden;
		line-height: 0;
	}

	.waves svg {
		position: relative;
		display: block;
		width: calc(200% + 1.3px);
		height: 150px;
	}

	.waves path {
		fill: rgba(255, 255, 255, 0.2);
		animation: wave 8s linear infinite;
	}

	@keyframes wave {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>

<main>
	<h1>Signing you in…</h1>
	<div class="loading-spinner"></div>

	<div class="waves">
		<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"></path>
		</svg>
	</div>
</main>
