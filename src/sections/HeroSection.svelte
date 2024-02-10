<script lang="ts">
  import LibretrixButton from '$/components/LibretrixButton.svelte'

  import { scrollIntoView } from '$/lib'
</script>

<section id="hero" class="flex flex-row items-center w-full py-[35dvh] px-8 isolate">
  <div class="w-full flex justify-end relative">
    <div class="flex flex-col items-end gap-6 w-full max-w-[80%] md:max-w-[min(90%,60rem)]">
      <h2 class="text-4xl xl:text-6xl font-bold text-right">
        <span>Join the world of</span>
        <span class="text-primary-400 font-medium whitespace-nowrap">[ <span class="text-text">secure</span> ]</span>
        <span>messaging</span>
      </h2>
      <div class="absolute w-40 h-40 rounded-full blur-80 bg-[#7CC2D8] bg-opacity-60 sm:bg-opacity-75 translate-y-[-25%] -z-10 md:hidden" />
      <span class="flex flex-row justify-end flex-wrap gap-2">
        <a href="#chat-with-your-friends" on:click|preventDefault={() => scrollIntoView('#chat-with-your-friends')}>
          <LibretrixButton color="secondary">Learn more</LibretrixButton>
        </a>
        <a href="https://app.libretrix.org/">
          <LibretrixButton>
            <span class="text-white">Log in</span>
          </LibretrixButton>
        </a>
      </span>
    </div>
  </div>
  <div class="w-[50%] hidden md:block relative">
    <div class="absolute w-70 h-70 rounded-full blur-300 bg-[#7CC2D8] bg-opacity-60 translate-x-[-15%] translate-y-[-80%] -z-10" />
    <div class="absolute w-80 h-80 rounded-full blur-400 bg-[#80C87E] bg-opacity-70 translate-x-[-60%] translate-y-[-20%] -z-10" />
  </div>
</section>