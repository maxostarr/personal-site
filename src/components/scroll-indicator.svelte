<script>
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
</script>

<!-- <svg
	version="1.1"
	id="Layer_1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px"
	y="0px"
	viewBox="0 0 56.8 34"
	enable-background="new 0 0 56.8 34"
	xml:space="preserve"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M30.7,32.7L55.3,8.1c1.1-1.1,1.1-2.7,0-3.8L53.1,2L30.7,24.3
c-1.1,1.1-2.8,1.1-3.9,0L4.5,2L2.2,4.3C1.1,5.4,1.1,7,2.2,8.1l24.6,24.6C27.9,33.7,29.7,33.7,30.7,32.7L30.7,32.7z"
	/>
</svg> -->

<svg
	in:fly={{
		y: 100,
		delay: 200,
		duration: 2000,
		easing: expoOut
	}}
	out:fly
	xmlns="http://www.w3.org/2000/svg"
	data-name="Layer 1"
	viewBox="0 0 100 125"
	x="0px"
	y="0px"
	><title>Scroll down</title><g>
		<circle class="circle-1" cx="50" cy="28" r="6" />
		<circle class="circle-2" cx="50" cy="50" r="6" />
		<circle class="circle-3" cx="50" cy="72" r="6" />
	</g>
	<!-- <text
		x="0"
		y="115"
		fill="#000000"
		font-size="5px"
		font-weight="bold"
		font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
		>Created by Gregor Cresnar</text
	><text
		x="0"
		y="120"
		fill="#000000"
		font-size="5px"
		font-weight="bold"
		font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
		>from the Noun Project</text> -->
</svg>

<style>
	@keyframes hideshow {
		0% {
			opacity: 1;
		}
		5% {
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}

	svg {
		width: 10em;
		fill: var(--accent-light);
		position: absolute;
		bottom: 0;
		left: calc(50vw - 5em);
	}

	.circle-1 {
		animation: hideshow 4s ease infinite;
	}
	.circle-2 {
		animation: hideshow 4s 0.1s ease infinite;
	}
	.circle-3 {
		animation: hideshow 4s 0.2s infinite;
	}
</style>
