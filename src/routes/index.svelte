<svelte:head>
	<title>Max Starr</title>
</svelte:head>

<div class="container">
	<div class="card-container">
		<main class="card">
			<h1>Hi, I'm Max</h1>
			<p>I'm a web engineer</p>
		</main>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		height: 100%;
	}

	.card-container {
		grid-column: 2;
		display: flex;
		align-items: center;
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
