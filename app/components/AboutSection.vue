<script setup lang="ts">
// About section
</script>

<template>
  <section id="about" class="py-32 bg-white relative">
    <!-- Background element -->
    <div class="absolute right-0 top-0 w-1/3 h-full bg-brand-bg/50"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Image side -->
        <div 
          class="order-2 lg:order-1 relative"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 1000, ease: 'easeOut' } }"
        >
          <div class="relative w-full aspect-[4/5] bg-brand-bg border border-brand-navy/5">
            <img 
              src="/images/durubond_about_1786457259086.png" 
              alt="Durubond showing property" 
              class="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <!-- Accent Box -->
            <div class="absolute -bottom-6 -right-6 w-3/4 h-32 bg-brand-navy -z-10"></div>
          </div>
        </div>
        
        <!-- Text side -->
        <div 
          class="order-1 lg:order-2 relative z-10"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 1000, ease: 'easeOut' } }"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-[1px] bg-brand-gold"></div>
            <h2 class="text-brand-gold font-bold tracking-widest text-xs">About Me</h2>
          </div>
          
          <h3 class="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-8 leading-[1.2] tracking-tight">
            More than a consultant.<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-gold">A Strategic Partner.</span>
          </h3>
          
          <div class="space-y-6 text-gray-600 text-base md:text-lg border-l border-gray-200 pl-6">
            <p>
              With deep roots in the real estate market, I've spent years navigating the complexities of property investment, development, and portfolio management.
            </p>
            <p>
              My philosophy is simple: real estate isn't just about transactions; it's about building generational wealth and making informed decisions that stand the test of time.
            </p>
            <p>
              Whether you are a first-time buyer looking for the perfect home or an experienced investor expanding your portfolio, I provide the insights and strategies needed to succeed in today's dynamic market.
            </p>
          </div>
          
          <div class="mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
            <div>
              <h4 class="text-3xl font-heading font-bold text-brand-navy mb-1">500+</h4>
              <p class="text-xs text-gray-500 tracking-widest font-bold">Happy Clients</p>
            </div>
            <div>
              <h4 class="text-3xl font-heading font-bold text-brand-navy mb-1">$50M+</h4>
              <p class="text-xs text-gray-500 tracking-widest font-bold">Property Sold</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
