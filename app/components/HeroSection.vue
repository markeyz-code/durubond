<script setup lang="ts">
// Hero section
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/durubond_hero_1786457219425.png" 
        alt="Durubond - Real Estate Consultant" 
        class="w-full h-full object-cover object-top opacity-50 filter contrast-125 grayscale"
      />
      <!-- Gradient overlay for text readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg/50"></div>
    </div>

    <!-- Abstract architectural lines -->
    <div class="absolute inset-0 pointer-events-none opacity-10 z-10">
      <div class="absolute top-0 left-1/4 w-[1px] h-full bg-brand-gold"></div>
      <div class="absolute top-1/3 left-0 w-full h-[1px] bg-brand-gold"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full px-4 md:px-6 grid lg:grid-cols-12 gap-8 relative z-20 pt-32 md:pt-20">
      <!-- Text Content -->
      <div class="lg:col-span-8 relative">
        <div 
          class="inline-block px-4 py-1.5 border border-brand-gold/30 rounded-full mb-8 backdrop-blur-sm"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
        >
          <span class="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">Premier Advisory</span>
        </div>
        
        <div class="absolute -top-20 -left-10 text-brand-surface font-heading text-[12rem] font-bold select-none tracking-tighter hidden md:block whitespace-nowrap opacity-50 -z-10">
          Duru Bond
        </div>
        
        <h1 
          class="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white leading-[1.05] mb-8 tracking-tighter"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200, ease: 'circOut' } }"
        >
          Real Estate<br />
          <span class="text-brand-gold font-medium">Entrepreneur</span><br />
          <span class="text-3xl md:text-5xl lg:text-6xl">& Property Advisor</span>
        </h1>
        
        <p 
          class="text-base md:text-xl text-brand-text-muted mb-12 max-w-lg font-light leading-relaxed border-l border-brand-gold/50 pl-6"
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 400, ease: 'circOut' } }"
        >
          Real estate, investment and development insights for people who want to understand where their money is going.
        </p>
        
        <div 
          class="flex flex-col sm:flex-row items-center gap-6"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600, ease: 'easeOut' } }"
        >
          <a 
            href="#contact"
            @click.prevent="() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }"
            class="group relative w-full sm:w-auto px-10 py-4 bg-brand-gold text-brand-bg text-sm font-bold tracking-widest overflow-hidden text-center rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 cursor-pointer"
          >
            <span class="relative z-10 uppercase text-brand-bg group-hover:text-brand-bg transition-colors duration-300">Book Strategy Session</span>
            <div class="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
          </a>
        </div>
      </div>
      
      <!-- Stats Content -->
      <div class="lg:col-span-4 flex items-end justify-start lg:justify-end mt-12 lg:mt-0">
        <div 
          class="bg-brand-surface/40 backdrop-blur-md p-8 border border-white/5 rounded-2xl relative overflow-hidden group"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 800, ease: 'easeOut' } }"
        >
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-transparent"></div>
          <div class="flex items-center gap-6">
            <div class="text-6xl font-heading font-bold text-brand-gold group-hover:scale-110 transition-transform duration-500">10+</div>
            <div class="text-xs tracking-[0.2em] text-white font-bold uppercase leading-relaxed">
              Years of <br /> Excellence
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
