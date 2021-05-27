<script>
	import { onMount } from 'svelte';
	import AppHero from '../components/app-hero.svelte';
	import AppHeader from '../components/app-header.svelte';
	import ScrollIndicator from '../components/scroll-indicator.svelte';
	let ready = false;
	onMount(() => setTimeout(() => (ready = true), 400));
</script>

<svelte:head>
	<title>Max Starr</title>
</svelte:head>

{#if ready}
	<AppHeader />
	<AppHero />
	<ScrollIndicator />
{/if}
