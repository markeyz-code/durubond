 <script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollTo = (id: string) => {
  isMobileMenuOpen.value = false // close menu on click
  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-6 pointer-events-none transition-all duration-500" :class="isScrolled ? 'pt-4' : 'pt-8'">
    <header 
      class="pointer-events-auto flex items-center justify-between px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-500 w-full max-w-5xl"
      :class="isScrolled ? 'bg-brand-surface/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50' : 'bg-transparent border border-transparent'"
    >
      <NuxtLink to="/" class="text-xl md:text-2xl font-heading font-bold text-white tracking-tighter transition-transform hover:scale-105 duration-300">
        Duru Bond<span class="text-brand-primary">.</span>
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8 font-sans font-medium text-xs tracking-widest uppercase text-brand-text-muted">
        <a href="#about" @click.prevent="scrollTo('about')" class="hover:text-white transition-colors duration-300 relative group cursor-pointer">
          <span>About</span>
          <div class="absolute -bottom-2 left-1/2 w-1 h-1 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-1/2"></div>
        </a>
        <a href="#services" @click.prevent="scrollTo('services')" class="hover:text-white transition-colors duration-300 relative group cursor-pointer">
          <span>Services</span>
          <div class="absolute -bottom-2 left-1/2 w-1 h-1 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-1/2"></div>
        </a>
        <a href="#content" @click.prevent="scrollTo('content')" class="hover:text-white transition-colors duration-300 relative group cursor-pointer">
          <span>Insights</span>
          <div class="absolute -bottom-2 left-1/2 w-1 h-1 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-1/2"></div>
        </a>
      </nav>
      
      <a 
        href="https://selar.co/662a73" 
        target="_blank"
        class="hidden md:inline-flex bg-brand-primary text-white hover:bg-white hover:text-brand-bg px-6 py-2.5 rounded-full font-sans font-bold text-xs tracking-widest transition-all duration-300 uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer relative z-20"
      >
        Strategy Session
      </a>

      <!-- Mobile Hamburger Button -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none z-50"
      >
        <span class="block w-6 h-0.5 bg-white transition-all duration-300" :class="isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''"></span>
        <span class="block w-6 h-0.5 bg-white transition-all duration-300" :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
        <span class="block w-6 h-0.5 bg-white transition-all duration-300" :class="isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''"></span>
      </button>
    </header>

    <!-- Mobile Navigation Menu -->
    <div 
      class="fixed inset-0 bg-brand-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 pointer-events-auto"
      :class="isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
    >
      <nav class="flex flex-col items-center gap-8 font-sans font-medium text-lg tracking-widest uppercase text-white">
        <a href="#about" @click.prevent="scrollTo('about')" class="hover:text-brand-primary transition-colors duration-300">About</a>
        <a href="#services" @click.prevent="scrollTo('services')" class="hover:text-brand-primary transition-colors duration-300">Services</a>
        <a href="#content" @click.prevent="scrollTo('content')" class="hover:text-brand-primary transition-colors duration-300">Insights</a>
        <a 
          href="https://selar.co/662a73" 
          target="_blank"
          class="mt-4 bg-brand-primary text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-brand-bg transition-all duration-300"
        >
          Strategy Session
        </a>
      </nav>
    </div>
  </div>
</template>
