<script>
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
</script>

<div class="container">
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
			<h1>Hi, I'm <em>Max</em></h1>
			<p>I'm a web engineer</p>
		</main>
	</div>
	<div class="grid-item col-4">
		<div
			class="card"
			in:fly={{
				delay: 100,
				x: 100,
				duration: 2000,
				easing: expoOut
			}}
			out:fly
		>
			<img src="/max.png" alt="Max Starr" />
		</div>
	</div>

	<div class="grid-item col-6">
		<div
			class="card"
			in:fly={{
				delay: 200,
				x: 100,
				duration: 2000,
				easing: expoOut
			}}
			out:fly
		>
			<h1>I want to do great work for <em>you</em></h1>
			<p>I love solving hard problems and making an impact.</p>
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		height: 75vh;
	}

	.grid-item {
		display: flex;
		align-items: center;
	}

	.col-1 {
		grid-column: 1;
	}
	.col-2 {
		grid-column: 2;
	}
	.col-3 {
		grid-column: 3;
	}
	.col-4 {
		grid-column: 4;
	}
	.col-5 {
		grid-column: 5;
	}
	.col-6 {
		grid-column: 6;
	}
	.col-7 {
		grid-column: 7;
	}

	em {
		font-style: normal;
		color: var(--accent-primary);
	}

	.card {
		background-color: var(--light);
		color: var(--dark);
		padding: 1em;
		width: max-content;
		max-width: calc(100vw / 7);
	}

	h1 {
		color: var(--text-dark);
	}
</style>
