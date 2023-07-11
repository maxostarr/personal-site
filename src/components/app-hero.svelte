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
	<div class="grid-item col-4 ">
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
			<img src="/max.jpg" alt="Max Starr" />
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
			<p>I love solving hard problems and making an impact</p>
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(3, calc(100% / 3));
		/* column-gap: 2em; */
		/* display: flex;
		justify-content: space-around; */
	}

	.grid-item {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	em {
		font-style: normal;
		color: var(--accent-primary);
	}

	h1 {
		color: var(--text-dark);
	}

	img {
		width: min(20em, calc(100vw - 10em));
	}

	@media only screen and (max-width: 1024px) {
		.container {
			display: flex;
			flex-direction: column;
			/* justify-content: space-around; */
		}
		.grid-item {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0;
			/* margin: 3em; */
		}
	}
</style>
