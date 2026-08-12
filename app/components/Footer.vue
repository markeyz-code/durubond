<script setup lang="ts">
// Footer
</script>

<template>
  <footer class="bg-brand-surface text-white py-16 border-t border-white/5 relative overflow-hidden">
    <!-- Abstract subtle glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-brand-primary/5 blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 md:px-12 flex flex-col justify-center items-center relative z-10">
      <div class="text-center">
        <a href="#" class="text-3xl md:text-4xl font-heading font-bold text-white tracking-tighter hover:text-brand-primary transition-colors duration-300 inline-block mb-3">
          Duru Bond<span class="text-brand-primary">.</span>
        </a>
        <p class="text-brand-text-muted font-light text-sm tracking-widest uppercase">
          Premier Real Estate Advisory
        </p>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 md:px-12 mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/30 tracking-wider">
      &copy; {{ new Date().getFullYear() }} Duru Bond. All rights reserved.
    </div>
  </footer>
</template>
