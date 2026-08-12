<script setup>
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap' }
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
