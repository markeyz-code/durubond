<script setup lang="ts">
// CTA section
</script>

<template>
  <section id="book" class="py-32 relative bg-brand-navy border-t border-brand-gold">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <h2 class="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight tracking-tight">
          Ready to Make Your <br class="hidden md:block" />
          <span class="text-brand-gold italic">Next Big Move?</span>
        </h2>
        <p class="text-white/70 text-base md:text-lg mb-12 max-w-xl mx-auto font-light">
          Book a one-on-one consultation today and let's craft a winning strategy for your real estate portfolio.
        </p>
        
        <a 
          href="https://selar.co" 
          target="_blank"
          class="group inline-flex items-center justify-center gap-4 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy px-12 py-5 font-bold text-sm tracking-widest transition-all duration-300"
        >
          Book Your Session
          <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
