<script>
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	let ready = false;
	onMount(() => setTimeout(() => (ready = true), 400));
</script>

<svelte:head>
	<title>Max Starr</title>
</svelte:head>

<div class="container">
	{#if ready}
		<div class="grid-item col-2">
			<main
				class="card"
				in:fly={{
					x: 100,
					duration: 2000,
					easing: expoOut
				}}
				out:fly
			>
				<h1>Hi, I'm Max</h1>
				<p>I'm a web engineer</p>
			</main>
		</div>
		<div class="grid-item col-3">
			<div
				class="card"
				in:fly={{
					delay: 100,
					y: -100,
					duration: 2000,
					easing: expoOut
				}}
				out:fly
			>
				<img src="/max.png" alt="Max Starr" />
			</div>
		</div>
	{/if}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		height: 100%;
	}

	.grid-item {
		display: flex;
		align-items: center;
	}
	.col-2 {
		grid-column: 2;
	}
	.col-3 {
		grid-column: 3;
	}

	.card {
		background-color: var(--light);
		color: var(--dark);
		padding: 1em;
		width: max-content;
	}

	h1 {
		color: var(--text-dark);
	}
</style>
