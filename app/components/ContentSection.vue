<script setup lang="ts">
// Content section
</script>

<template>
  <section id="content" class="py-32 bg-brand-surface relative">
    <div class="max-w-7xl mx-auto px-4 md:px-12">
      <div class="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
        <div 
          class="max-w-2xl"
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-8 h-[1px] bg-brand-gold"></div>
            <h2 class="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs">Insights & Media</h2>
          </div>
          <h3 class="text-4xl md:text-5xl font-heading font-bold text-white leading-tight tracking-tighter">
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
            class="group inline-flex items-center gap-3 text-white font-bold text-sm tracking-widest relative overflow-hidden uppercase"
          >
            <span>Visit my Linktree</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>

          <a 
            href="https://www.youtube.com/@DURUBOND/videos" 
            target="_blank"
            class="group inline-flex items-center gap-3 text-brand-gold font-bold text-sm tracking-widest relative overflow-hidden uppercase"
          >
            <span>View all Videos</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
        </div>
      </div>
      
      <div class="mb-16">
        <p class="text-white font-bold tracking-widest uppercase text-sm mb-4">Content Pillars:</p>
        <div class="flex flex-wrap gap-3">
          <span class="px-5 py-2.5 bg-brand-bg/50 backdrop-blur-sm border border-white/5 text-xs font-bold tracking-[0.2em] text-brand-text-muted hover:text-white hover:border-brand-gold/50 transition-all rounded-full cursor-default uppercase">Real Estate</span>
          <span class="px-5 py-2.5 bg-brand-bg/50 backdrop-blur-sm border border-white/5 text-xs font-bold tracking-[0.2em] text-brand-text-muted hover:text-white hover:border-brand-gold/50 transition-all rounded-full cursor-default uppercase">Economics</span>
          <span class="px-5 py-2.5 bg-brand-bg/50 backdrop-blur-sm border border-white/5 text-xs font-bold tracking-[0.2em] text-brand-text-muted hover:text-white hover:border-brand-gold/50 transition-all rounded-full cursor-default uppercase">Property Development</span>
          <span class="px-5 py-2.5 bg-brand-bg/50 backdrop-blur-sm border border-white/5 text-xs font-bold tracking-[0.2em] text-brand-text-muted hover:text-white hover:border-brand-gold/50 transition-all rounded-full cursor-default uppercase">Urban Development</span>
          <span class="px-5 py-2.5 bg-brand-bg/50 backdrop-blur-sm border border-white/5 text-xs font-bold tracking-[0.2em] text-brand-text-muted hover:text-white hover:border-brand-gold/50 transition-all rounded-full cursor-default uppercase">Policy</span>
          <span class="px-5 py-2.5 bg-brand-bg/50 backdrop-blur-sm border border-white/5 text-xs font-bold tracking-[0.2em] text-brand-text-muted hover:text-white hover:border-brand-gold/50 transition-all rounded-full cursor-default uppercase">Property Education</span>
          <span class="px-5 py-2.5 bg-brand-bg/50 backdrop-blur-sm border border-white/5 text-xs font-bold tracking-[0.2em] text-brand-text-muted hover:text-white hover:border-brand-gold/50 transition-all rounded-full cursor-default uppercase">African Real Estate</span>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Video 1 -->
        <a 
          href="https://www.youtube.com/watch?v=FJcsiljMgPI"
          target="_blank"
          class="block aspect-video bg-brand-bg rounded-2xl border border-white/5 relative group overflow-hidden shadow-2xl"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <img src="https://img.youtube.com/vi/FJcsiljMgPI/maxresdefault.jpg" alt="This is WHY Lekki-Lagos Floods. (With Solutions)" class="absolute inset-0 w-full h-full object-cover filter contrast-110 group-hover:scale-110 group-hover:blur-sm transition-all duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
            <h4 class="text-white font-heading font-bold text-xl md:text-2xl leading-tight group-hover:-translate-y-4 transition-transform duration-500">This is WHY Lekki-Lagos Floods. (With Solutions)</h4>
          </div>
          <div class="absolute inset-0 bg-brand-gold/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-brand-bg font-bold tracking-[0.2em] uppercase text-sm border-2 border-brand-bg px-8 py-4 rounded-full flex items-center gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
              Watch Now
            </div>
          </div>
        </a>
        
        <!-- Video 2 -->
        <a 
          href="https://www.youtube.com/watch?v=bXSm8ugsLCI"
          target="_blank"
          class="block aspect-video bg-brand-bg rounded-2xl border border-white/5 relative group overflow-hidden shadow-2xl md:mt-16"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <img src="https://img.youtube.com/vi/bXSm8ugsLCI/maxresdefault.jpg" alt="Real Estate Economics Insights" class="absolute inset-0 w-full h-full object-cover filter contrast-110 group-hover:scale-110 group-hover:blur-sm transition-all duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
            <h4 class="text-white font-heading font-bold text-xl md:text-2xl leading-tight group-hover:-translate-y-4 transition-transform duration-500">Real Estate Economics Insights</h4>
          </div>
          <div class="absolute inset-0 bg-brand-gold/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-brand-bg font-bold tracking-[0.2em] uppercase text-sm border-2 border-brand-bg px-8 py-4 rounded-full flex items-center gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
              Watch Now
            </div>
          </div>
        </a>

        <!-- Video 3 -->
        <a 
          href="https://www.youtube.com/watch?v=csBIobysdYY"
          target="_blank"
          class="block aspect-video bg-brand-bg rounded-2xl border border-white/5 relative group overflow-hidden shadow-2xl"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <img src="https://img.youtube.com/vi/csBIobysdYY/maxresdefault.jpg" alt="Property Development Masterclass" class="absolute inset-0 w-full h-full object-cover filter contrast-110 group-hover:scale-110 group-hover:blur-sm transition-all duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
            <h4 class="text-white font-heading font-bold text-xl md:text-2xl leading-tight group-hover:-translate-y-4 transition-transform duration-500">Property Development Masterclass</h4>
          </div>
          <div class="absolute inset-0 bg-brand-gold/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-brand-bg font-bold tracking-[0.2em] uppercase text-sm border-2 border-brand-bg px-8 py-4 rounded-full flex items-center gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
              Watch Now
            </div>
          </div>
        </a>

        <!-- Video 4 -->
        <a 
          href="https://www.youtube.com/watch?v=09KnRFvfKSA"
          target="_blank"
          class="block aspect-video bg-brand-bg rounded-2xl border border-white/5 relative group overflow-hidden shadow-2xl md:mt-16"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <img src="https://img.youtube.com/vi/09KnRFvfKSA/maxresdefault.jpg" alt="Navigating the Real Estate Market" class="absolute inset-0 w-full h-full object-cover filter contrast-110 group-hover:scale-110 group-hover:blur-sm transition-all duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
            <h4 class="text-white font-heading font-bold text-xl md:text-2xl leading-tight group-hover:-translate-y-4 transition-transform duration-500">Navigating the Real Estate Market</h4>
          </div>
          <div class="absolute inset-0 bg-brand-gold/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-brand-bg font-bold tracking-[0.2em] uppercase text-sm border-2 border-brand-bg px-8 py-4 rounded-full flex items-center gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
              Watch Now
            </div>
          </div>
        </a>

        <!-- Video 5 -->
        <a 
          href="https://www.youtube.com/watch?v=ZOuy9auVvog"
          target="_blank"
          class="block aspect-video bg-brand-bg rounded-2xl border border-white/5 relative group overflow-hidden shadow-2xl"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <img src="https://img.youtube.com/vi/ZOuy9auVvog/maxresdefault.jpg" alt="Real Estate Insights Nigeria" class="absolute inset-0 w-full h-full object-cover filter contrast-110 group-hover:scale-110 group-hover:blur-sm transition-all duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
            <h4 class="text-white font-heading font-bold text-xl md:text-2xl leading-tight group-hover:-translate-y-4 transition-transform duration-500">Real Estate Insights Nigeria</h4>
          </div>
          <div class="absolute inset-0 bg-brand-gold/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-brand-bg font-bold tracking-[0.2em] uppercase text-sm border-2 border-brand-bg px-8 py-4 rounded-full flex items-center gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
              Watch Now
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
