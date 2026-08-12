<script setup lang="ts">
const socials = [
  {
    name: 'YouTube',
    handle: '@DURUBOND',
    url: 'https://www.youtube.com/@DURUBOND',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" /></svg>',
    color: 'hover:text-[#FF0000] hover:border-[#FF0000]',
    bgColor: 'group-hover:bg-[#FF0000]/10',
    stats: 'Video Content'
  },
  {
    name: 'Instagram',
    handle: '@bond_not_james',
    url: 'https://instagram.com/bond_not_james',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" clip-rule="evenodd" /></svg>',
    color: 'hover:text-[#E1306C] hover:border-[#E1306C]',
    bgColor: 'group-hover:bg-gradient-to-tr group-hover:from-[#f09433]/20 group-hover:via-[#dc2743]/20 group-hover:to-[#bc1888]/20',
    stats: '70K+ Followers'
  },
  {
    name: 'TikTok',
    handle: '@bond_not_james',
    url: 'https://tiktok.com/@bond_not_james',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
    color: 'hover:text-[#00F2FE] hover:border-[#00F2FE]',
    bgColor: 'group-hover:bg-[#25F4EE]/10',
    stats: '50K+ Followers'
  },
  {
    name: 'X (Twitter)',
    handle: '@bond_not_james',
    url: 'https://twitter.com/bond_not_james',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    color: 'hover:text-white hover:border-white',
    bgColor: 'group-hover:bg-white/10',
    stats: 'Latest Updates'
  },
  {
    name: 'Facebook',
    handle: 'bond_not_james',
    url: 'https://facebook.com/bond_not_james',
    icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>',
    color: 'hover:text-[#1877F2] hover:border-[#1877F2]',
    bgColor: 'group-hover:bg-[#1877F2]/10',
    stats: '35K+ Followers'
  }
]
</script>

<template>
  <section class="py-16 bg-brand-bg relative border-y border-white/5 overflow-hidden">
    <!-- Abstract subtle glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
      
      <!-- Header -->
      <div 
        class="text-center mb-12"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <div class="flex items-center justify-center gap-4 mb-4">
          <div class="w-8 h-[1px] bg-brand-primary"></div>
          <h2 class="text-brand-primary font-bold tracking-[0.2em] text-[10px] uppercase">Connect With Me</h2>
          <div class="w-8 h-[1px] bg-brand-primary"></div>
        </div>
        <h3 class="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase mb-4 leading-none">
          Join the Community
        </h3>
        <p class="text-brand-text-muted font-light text-sm md:text-base max-w-2xl mx-auto">
          Join a growing community across multiple platforms. Follow for insights, market updates, and real estate economics.
        </p>
      </div>

      <!-- Socials Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap justify-center gap-4">
        <a 
          v-for="(social, index) in socials" 
          :key="social.name"
          :href="social.url"
          target="_blank"
          class="group flex flex-col items-center p-6 bg-brand-surface/40 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden lg:flex-1 min-w-[160px] max-w-[220px]"
          :class="[social.color]"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
        >
          <!-- Hover Background Overlay -->
          <div class="absolute inset-0 transition-colors duration-500 opacity-0 group-hover:opacity-100 -z-10" :class="social.bgColor"></div>
          
          <div class="mb-4 text-white/40 transition-colors duration-500 group-hover:scale-110 transform" v-html="social.icon"></div>
          
          <h4 class="text-xl font-heading font-bold text-white mb-1 tracking-tight group-hover:text-inherit transition-colors">{{ social.name }}</h4>
          <p class="text-brand-primary font-mono text-[10px] mb-4">{{ social.handle }}</p>
          
          <div class="mt-auto pt-4 border-t border-white/10 w-full text-center">
            <span class="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase group-hover:text-inherit transition-colors">{{ social.stats }}</span>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>
