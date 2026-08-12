<script setup lang="ts">
// About section
</script>

<template>
  <section id="about" class="py-32 bg-brand-surface relative overflow-hidden">
    <!-- Background element -->
    <div class="absolute right-0 top-0 w-1/3 h-full bg-brand-bg/50 rounded-l-[100px]"></div>

    <div class="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Image side -->
        <div 
          class="order-2 lg:order-1 relative"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 1000, ease: 'easeOut' } }"
        >
          <div class="relative w-full aspect-[4/5] bg-brand-bg rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black">
            <img 
              src="/images/durubond_about_1786457259086.png" 
              alt="Duru Bond showing property" 
              class="w-full h-full object-cover filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
            />
            <!-- Accent Box -->
            <div class="absolute -bottom-6 -right-6 w-3/4 h-32 bg-brand-primary -z-10 rounded-xl blur-xl opacity-20"></div>
          </div>
        </div>
        
        <!-- Text side -->
        <div 
          class="order-1 lg:order-2 relative z-10"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 1000, ease: 'easeOut' } }"
        >
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-[1px] bg-brand-primary"></div>
            <h2 class="text-brand-primary font-bold tracking-[0.2em] text-xs uppercase">The Advisor</h2>
          </div>
          
          <h3 class="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-[1.2] tracking-tighter">
            More than a consultant.<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">A Strategic Partner.</span>
          </h3>
          
          <div class="space-y-6 text-brand-text-muted text-base md:text-lg border-l border-white/10 pl-6 font-light leading-relaxed">
            <p>
              Duru Bond is a Nigerian real estate entrepreneur and property advisor helping people navigate property acquisition, development and investment with greater clarity. His work sits at the intersection of real estate, economics and the built environment.
            </p>
            <p>
              Through real estate practice and millions of views online, he breaks down the economics, risks and opportunities shaping Nigeria's property market.
            </p>
            <p>
              His content has attracted a large audience across social platforms and has led to appearances on podcasts, media platforms and industry events discussing Nigeria's housing market, real estate investment, development and urban issues.
            </p>
            <p>
              He has appeared on platforms including Honest bunch, OffAir with Gbemi & Toolz, Menisms and many more discussing subjects including Lagos housing costs, property investment, agency fees, property development and the economics of renting and owning property.
            </p>
          </div>
          
          <div class="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <h4 class="text-4xl font-heading font-bold text-brand-primary mb-2">10</h4>
              <p class="text-xs text-white/50 tracking-[0.2em] font-bold uppercase">Years Experience</p>
            </div>
            <div>
              <h4 class="text-lg font-heading font-bold text-white mb-2 leading-tight">Lagos, Abuja, Kenya, Ghana, Ivory Coast</h4>
              <p class="text-xs text-white/50 tracking-[0.2em] font-bold uppercase mt-2">Markets</p>
            </div>
          </div>
          
          <div class="mt-12 pt-8 border-t border-white/10">
            <h4 class="text-xs font-bold text-brand-primary tracking-[0.2em] uppercase mb-6">Featured On & Partners</h4>
            <div class="flex flex-wrap gap-3 items-center">
              <span class="px-4 py-2 border border-white/10 text-white/70 font-medium text-xs rounded-full hover:bg-white/5 hover:text-white transition-colors">REMA 2025</span>
              <span class="px-4 py-2 border border-white/10 text-white/70 font-medium text-xs rounded-full hover:bg-white/5 hover:text-white transition-colors">OffAir with Gbemi & Toolz</span>
              <span class="px-4 py-2 border border-white/10 text-white/70 font-medium text-xs rounded-full hover:bg-white/5 hover:text-white transition-colors">Menisms</span>
              <span class="px-4 py-2 border border-white/10 text-white/70 font-medium text-xs rounded-full hover:bg-white/5 hover:text-white transition-colors">Noble Nigeria</span>
              <span class="px-4 py-2 border border-white/10 text-white/70 font-medium text-xs rounded-full hover:bg-white/5 hover:text-white transition-colors">Lagos Talks 91.3</span>
              <span class="px-4 py-2 border border-white/10 text-white/70 font-medium text-xs rounded-full hover:bg-white/5 hover:text-white transition-colors">Honest Bunch Podcast</span>
              <span class="px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary font-bold text-xs rounded-full">Lagos State Govt</span>
              <span class="px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary font-bold text-xs rounded-full">Venco</span>
            </div>
          </div>

          <div class="mt-12 pt-8 border-t border-white/10">
            <h4 class="text-xs font-bold text-brand-primary tracking-[0.2em] uppercase mb-6">Community Reach</h4>
            <div class="grid grid-cols-3 sm:grid-cols-5 gap-4">
              <div>
                <h5 class="text-2xl md:text-3xl font-heading font-bold text-white mb-1">70K<span class="text-brand-primary">+</span></h5>
                <p class="text-[10px] text-white/50 tracking-[0.2em] font-bold uppercase">Instagram</p>
              </div>
              <div>
                <h5 class="text-2xl md:text-3xl font-heading font-bold text-white mb-1">50K<span class="text-brand-primary">+</span></h5>
                <p class="text-[10px] text-white/50 tracking-[0.2em] font-bold uppercase">TikTok</p>
              </div>
              <div>
                <h5 class="text-2xl md:text-3xl font-heading font-bold text-white mb-1">35K<span class="text-brand-primary">+</span></h5>
                <p class="text-[10px] text-white/50 tracking-[0.2em] font-bold uppercase">Facebook</p>
              </div>
              <div>
                <h5 class="text-2xl md:text-3xl font-heading font-bold text-white mb-1">20K<span class="text-brand-primary">+</span></h5>
                <p class="text-[10px] text-white/50 tracking-[0.2em] font-bold uppercase">X</p>
              </div>
              <div>
                <h5 class="text-2xl md:text-3xl font-heading font-bold text-white mb-1">12K<span class="text-brand-primary">+</span></h5>
                <p class="text-[10px] text-white/50 tracking-[0.2em] font-bold uppercase">YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
