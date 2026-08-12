<script setup>
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,600,700&display=swap' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-gold selection:text-brand-bg overflow-x-hidden flex flex-col">
    <Navbar />
    <div class="flex-grow relative z-0">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
