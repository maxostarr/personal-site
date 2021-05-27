<script>
  import { fly } from "svelte/transition"
  import { expoOut } from "svelte/easing"
  import { onMount } from "svelte"

  let ready = false
  onMount(() => setTimeout(() => (ready = true), 400))
</script>

<svelte:head>
  <title>Max Starr</title>
</svelte:head>

{#if ready}
  <div class="container">
    <div
      in:fly={{
        x: 100,
        duration: 2000,
        easing: expoOut,
      }}
      out:fly
    >
      <h1>Hi,</h1>
      <h2>I'm Max</h2>
      <p>I make websites</p>
    </div>
  </div>
{/if}

<style>
  .container {
    display: flex;
    height: 100%;
    align-items: center;
  }
</style>
