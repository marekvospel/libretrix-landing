<script>
  import LibretrixButton from "$/components/LibretrixButton.svelte";
</script>

<section id="opensource" class="relative flex flex-col gap-2 items-end py-[35dvh] text-right">
  <div class="hidden md:block absolute right-0 w-110 h-110 rounded-full blur-350 bg-[#7CC2D8] bg-opacity-25 translate-x-0 lg:translate-x-[7%] translate-y-[-40%] -z-10" />
  <div class="absolute left-[15%] w-110 h-110 rounded-full blur-350 bg-[#7CC2D8] bg-opacity-40 translate-x-[-50%] translate-y-[25%] -z-10" />
  <div class="absolute left-[30%] w-110 h-110 rounded-full blur-350 bg-[#80C87E] bg-opacity-40 translate-y-[-25%] -z-10" />
  <h2 class="text-4xl font-bold">Know what you use</h2>
  <p class="text-text-semilight text-lg">Our project is open-source on GitHub.<br> Let's build a privacy-first world together!</p>
  <a href="https://github.com/marekvospel/libretrix" target="_blank" rel="noreferrer noopener">
    <LibretrixButton color="secondary">
      <span class="i-bxl:github" />
      <span>GitHub</span>
    </LibretrixButton>
  </a>
</section>