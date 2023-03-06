<script lang="ts">
  import logo from './images/logo.png';
  import TestComponent from './TestComponent.svelte';
  import { state } from './state';
  let count = 0;
</script>

<div class="mx-auto max-w-2xl py-16">
  <div class="text-center space-y-4">
    <TestComponent />
    <div class="w-[200px] h-[200px] m-auto m-y-10">
      <img class="h-full" src={logo} alt="svelte logo" />
    </div>
    <p class="text-2xl mt-3 text-lg leading-8 text-white">
      The input text (without the keyword is): {$state}
    </p>
    <p class="mt-3 text-lg leading-8 text-white">The count is: {count}</p>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      on:click={() => (count = count + 1)}
    >
      Click
    </button>
  </div>
</div>
