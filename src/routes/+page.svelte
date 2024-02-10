<script lang="ts">
  import '@unocss/reset/tailwind.css'
  import LibretrixButton from '$/components/LibretrixButton.svelte'
  import LibretrixContainer from '$/components/LibretrixContainer.svelte'
</script>

<main>
  <LibretrixContainer>
    <div class="flex flex-row items-center w-full py-[35vh] px-8 isolate">
      <div class="w-full flex justify-end relative">
        <div class="flex flex-col items-end gap-4 w-full max-w-[80%] md:max-w-[min(50%,40rem)]">
          <h1 class="text-4xl font-bold text-right">
            <span>Join the world of</span>
            <span class="text-primary-400 font-medium whitespace-nowrap">[ <span class="text-text">secure</span> ]</span>
            <span>messaging</span>
          </h1>
          <div class="absolute w-40 h-40 rounded-full blur-80 bg-[#7CC2D8] bg-opacity-60 sm:bg-opacity-75 translate-y-[-25%] -z-10 md:hidden" />
          <span class="flex flex-row justify-end flex-wrap gap-2">
            <LibretrixButton color="secondary">Learn more</LibretrixButton>
            <a href="https://app.libretrix.org/">
              <LibretrixButton>Log in</LibretrixButton>
            </a>
          </span>
        </div>
      </div>
      <div class="w-[50%] hidden md:block relative">
        <div class="absolute w-70 h-70 rounded-full blur-300 bg-[#7CC2D8] bg-opacity-60 translate-x-[-15%] translate-y-[-80%] -z-10" />
        <div class="absolute w-80 h-80 rounded-full blur-400 bg-[#80C87E] bg-opacity-70 translate-x-[-60%] translate-y-[-20%] -z-10" />
      </div>
    </div>
  </LibretrixContainer>
</main>

<style>
  :global(body) {
    @apply min-h-screen bg-primary-900 text-text;
  }
</style>