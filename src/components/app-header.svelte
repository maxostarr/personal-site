<script>
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
</script>

<header
	in:fly={{
		y: -100,
		delay: 200,
		duration: 2000,
		easing: expoOut
	}}
	out:fly
>
	<ul>
		<li>
			<a href="https://www.linkedin.com/in/max-o-starr/">linkedin</a>
		</li>
		<li>
			<a href="https://github.com/maxostarr/">github</a>
		</li>
	</ul>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	ul {
		margin-top: 2em;
		display: flex;
		flex-direction: row;
		padding: 0;
	}

	li {
		list-style: none;
		padding-left: 2em;
		padding-right: 2em;
	}

	a {
		text-transform: uppercase;
		color: var(--accent-light);
		font-size: larger;
	}
</style>
