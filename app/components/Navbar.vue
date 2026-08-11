<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 md:py-6 border-b',
      isScrolled ? 'bg-brand-bg/95 backdrop-blur-md border-brand-navy/10' : 'bg-transparent border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="text-2xl font-heading font-bold text-brand-navy tracking-tighter ">
        Durubond<span class="text-brand-gold">.</span>
      </NuxtLink>
      
      <nav class="hidden md:flex items-center gap-8 font-bold text-xs tracking-widest text-brand-navy">
        <NuxtLink to="/about" class="hover:text-brand-gold transition-colors">About</NuxtLink>
        <NuxtLink to="/services" class="hover:text-brand-gold transition-colors">Services</NuxtLink>
        <NuxtLink to="/content" class="hover:text-brand-gold transition-colors">Content</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-brand-gold transition-colors">Contact</NuxtLink>
      </nav>
      
      <NuxtLink 
        to="/contact" 
        class="hidden md:inline-flex bg-transparent border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-6 py-3 font-bold text-xs tracking-widest transition-colors duration-300"
      >
        Book Strategy
      </NuxtLink>
    </div>
  </header>
</template>
