<script>
	import { onMount } from 'svelte';
	import AppHero from '../components/app-hero.svelte';
	import AppHeader from '../components/app-header.svelte';
	import ScrollIndicator from '../components/scroll-indicator.svelte';
	import LLJSIDE from '../components/projects/lljside.svelte';
	import SyncplayTwo from '../components/projects/syncplay-two.svelte';
	import CapstoneProject from '../components/projects/capstone-project.svelte';
	import AppFooter from '../components/app-footer.svelte';
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
	<div class="parent-grid even">
		<LLJSIDE />
		<SyncplayTwo />
		<CapstoneProject />
	</div>
	<AppFooter />
{/if}

<style>
	.parent-grid {
		display: grid;
		height: max-content;
		min-height: 100vh;
		grid-template-rows: 1fr 5fr 2fr;
	}

	.even {
		grid-template-rows: 1fr 1fr 1fr;
		row-gap: 2em;
	}
</style>
