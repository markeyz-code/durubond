<script setup lang="ts">
// Content section
</script>

<template>
  <section id="content" class="py-32 bg-brand-bg relative">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 border-b border-brand-navy/10 pb-8">
        <div 
          class="max-w-2xl"
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-8 h-[1px] bg-brand-gold"></div>
            <h2 class="text-brand-gold font-bold tracking-widest text-xs">Insights & Media</h2>
          </div>
          <h3 class="text-3xl md:text-5xl font-heading font-bold text-brand-navy leading-tight tracking-tight">
            Learn with Durubond
          </h3>
        </div>
        
        <div 
          class="flex flex-col sm:flex-row items-center gap-6"
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <a 
            href="https://linktr.ee/durubond?utm_source=linktree_profile_share&ltsid=4407fef0-edc8-47ae-b592-15181c7dadf5" 
            target="_blank"
            class="group inline-flex items-center gap-3 text-brand-navy font-bold text-sm tracking-widest relative overflow-hidden"
          >
            <span>Visit my Linktree</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-brand-navy transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>

          <a 
            href="https://www.youtube.com/@DURUBOND/videos" 
            target="_blank"
            class="group inline-flex items-center gap-3 text-brand-gold font-bold text-sm tracking-widest relative overflow-hidden"
          >
            <span>View all Videos</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Video 1 -->
        <a 
          href="https://www.youtube.com/watch?v=KuKPg_XCNTc"
          target="_blank"
          class="block aspect-video bg-white border border-gray-100 relative group overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <img src="https://img.youtube.com/vi/KuKPg_XCNTc/maxresdefault.jpg" alt="How to START Real Estate business with NO MONEY" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
            <h4 class="text-white font-heading font-bold text-lg md:text-xl leading-tight">How to START Real Estate business with NO MONEY || Real Estate Investing for Beginners.</h4>
          </div>
          <div class="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
            <div class="text-white font-bold tracking-widest text-sm border border-white/30 px-6 py-3 rounded-full flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
              Watch on YouTube
            </div>
          </div>
        </a>
        
        <!-- Video 2 -->
        <a 
          href="https://www.youtube.com/watch?v=FJcsiljMgPI"
          target="_blank"
          class="block aspect-video bg-white border border-gray-100 relative group overflow-hidden mt-8 md:mt-16"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <img src="https://img.youtube.com/vi/FJcsiljMgPI/maxresdefault.jpg" alt="This is WHY Lekki-Lagos Floods. (With Solutions)" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
            <h4 class="text-white font-heading font-bold text-lg md:text-xl leading-tight">This is WHY Lekki-Lagos Floods. (With Solutions)</h4>
          </div>
          <div class="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
            <div class="text-white font-bold tracking-widest text-sm border border-white/30 px-6 py-3 rounded-full flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
              Watch on YouTube
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
