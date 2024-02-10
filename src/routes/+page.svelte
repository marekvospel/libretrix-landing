<script lang="ts">
  import '@unocss/reset/tailwind.css'

  import LibretrixContainer from '$/components/LibretrixContainer.svelte'
  import HeroSection from '$/sections/HeroSection.svelte'
  import ChatWithFriendsSection from '$/sections/ChatWithFriendsSection.svelte'
  import OpensoureSection from '$/sections/OpensoureSection.svelte'
  import FooterSection from '$/sections/FooterSection.svelte'
</script>

<svelte:head>
  <title>Libretrix</title>
  <meta name="og:title" content="Libretrix">
  <meta name="description" content="A modern opensource matrix client">
  <meta name="og:description" content="A modern opensource matrix client">
  <meta name="author" content="Marek Vospěl">
  <meta name="og:url" content="https://libretrix.org">
</svelte:head>

<main>
  <LibretrixContainer>
    <h1 class="hidden">Libretrix</h1>
    <HeroSection />
    <ChatWithFriendsSection />
    <OpensoureSection />
    <FooterSection />
  </LibretrixContainer>
</main>

<style>
  :global(body) {
    @apply min-h-[100dwh] bg-primary-900 text-text;
  }
</style>