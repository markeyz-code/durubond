<script setup lang="ts">
// Contact Section
</script>

<template>
  <section id="contact" class="py-32 bg-brand-bg relative overflow-hidden">
    <!-- Abstract architectural lines -->
    <div class="absolute inset-0 pointer-events-none opacity-10">
      <div class="absolute top-0 right-1/4 w-[1px] h-full bg-brand-primary"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 md:px-12 flex justify-center relative z-10">
      
      <!-- Contact Info -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="w-full flex flex-col items-center text-center"
      >
        <div class="flex items-center gap-4 mb-4 justify-center">
          <div class="w-8 h-[1px] bg-brand-primary"></div>
          <h2 class="text-brand-primary font-bold tracking-[0.2em] text-xs uppercase">Get In Touch</h2>
          <div class="w-8 h-[1px] bg-brand-primary"></div>
        </div>
        <h3 class="text-4xl md:text-6xl font-heading font-bold text-white leading-tight tracking-tighter mb-8">
          Let's Start a <br /> <span class="font-medium text-brand-primary">Conversation.</span>
        </h3>
        
        <p class="text-brand-text-muted font-light leading-relaxed mb-12 max-w-xl mx-auto">
          Whether you're looking for advisory services, investment insights, or partnership opportunities, I'm just a message away.
        </p>

        <div class="flex flex-col md:flex-row gap-10 md:gap-16 justify-center mt-8">
          <div class="flex flex-col items-center gap-4 group">
            <div class="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center bg-brand-surface group-hover:bg-brand-primary transition-colors duration-300">
              <svg class="w-6 h-6 text-white group-hover:text-brand-bg transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div class="text-center">
              <p class="text-xs tracking-[0.2em] font-bold text-brand-primary mb-2 uppercase">Email</p>
              <a href="mailto:contact@durubond.com" class="text-white hover:text-brand-primary font-light transition-colors text-lg">contact@durubond.com</a>
            </div>
          </div>
          
          <div class="flex flex-col items-center gap-4 group">
            <div class="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center bg-brand-surface group-hover:bg-brand-primary transition-colors duration-300">
              <svg class="w-6 h-6 text-white group-hover:text-brand-bg transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div class="text-center">
              <p class="text-xs tracking-[0.2em] font-bold text-brand-primary mb-2 uppercase">Office</p>
              <p class="text-white font-light text-lg max-w-[250px]">Poise Nigeria Building, Pinnock Beach Estate, Jakande Lagos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
