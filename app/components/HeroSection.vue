<script setup lang="ts">
// Hero section
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden bg-brand-bg">
    <!-- Abstract architectural lines -->
    <div class="absolute inset-0 pointer-events-none opacity-20">
      <div class="absolute top-0 left-1/3 w-[1px] h-full bg-brand-navy"></div>
      <div class="absolute top-1/4 left-0 w-full h-[1px] bg-brand-navy"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-12 gap-8 relative z-10 items-center">
      <!-- Text Content -->
      <div class="lg:col-span-5 order-2 lg:order-1 mt-12 lg:mt-0 relative">
        <div class="absolute -top-12 -left-6 text-brand-gold/10 font-heading text-9xl font-bold select-none tracking-tighter hidden md:block">
          Durubond
        </div>
        <h1 
          class="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-brand-navy leading-[1.1] mb-8 relative z-10 tracking-tight mix-blend-difference"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000, ease: 'circOut' } }"
        >
          Elevating<br />
          <span class="text-brand-gold italic font-medium">Real Estate</span><br />
          Beyond Limits.
        </h1>
        
        <p 
          class="text-base md:text-lg text-gray-700 mb-10 max-w-md border-l-2 border-brand-gold pl-6"
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 200, ease: 'circOut' } }"
        >
          I am Durubond, your premier real estate consultant. I architect wealth and turn property aspirations into concrete reality with data-driven precision.
        </p>
        
        <div 
          class="flex flex-col sm:flex-row items-center gap-6"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400, ease: 'easeOut' } }"
        >
          <NuxtLink 
            to="/#book"
            class="group relative w-full sm:w-auto px-8 py-4 bg-brand-navy text-white text-sm font-bold tracking-widest overflow-hidden text-center"
          >
            <span class="relative z-10">Book Strategy Session</span>
            <div class="absolute inset-0 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Image Content -->
      <div 
        class="lg:col-span-7 order-1 lg:order-2 relative h-[60vh] lg:h-[80vh] w-full"
        v-motion
        :initial="{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }"
        :enter="{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1200, delay: 300, ease: 'circOut' } }"
      >
        <div class="absolute inset-0 bg-brand-navy/5">
          <img 
            src="/images/durubond_hero_1786457219425.png" 
            alt="Durubond - Real Estate Consultant" 
            class="w-full h-full object-cover filter contrast-[1.05] saturate-0 hover:saturate-100 transition-all duration-1000"
          />
        </div>
        
        <!-- Brutalist Badge -->
        <div 
          class="absolute -bottom-8 -left-4 lg:-left-12 bg-white p-6 border border-brand-navy/10 z-20"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1000 } }"
        >
          <div class="flex items-center gap-4">
            <div class="text-4xl font-heading font-bold text-brand-gold">10+</div>
            <div class="text-xs tracking-widest text-brand-navy font-bold leading-tight">
              Years of <br /> Excellence
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
