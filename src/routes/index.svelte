<script>
	import { onMount } from 'svelte';
	import AppHero from '../components/app-hero.svelte';
	import AppHeader from '../components/app-header.svelte';
	import ScrollIndicator from '../components/scroll-indicator.svelte';
	import AppProjects from '../components/app-projects.svelte';
	let ready = false;
	onMount(() => setTimeout(() => (ready = true), 400));
</script>

<svelte:head>
	<title>Max Starr</title>
</svelte:head>

{#if ready}
	<div class="parent-grid">
		<AppHeader />
		<AppHero />
		<ScrollIndicator />
	</div>
	<div class="parent-grid">
		<AppProjects />
	</div>
{/if}

<style>
	.parent-grid {
		display: grid;
		height: max-content;
		min-height: 100vh;
		grid-template-rows: 1fr 5fr 2fr;
	}
</style>
