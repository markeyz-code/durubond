<script setup lang="ts">
import { Search, Home, Map, TrendingUp, Building, Users, Megaphone } from 'lucide-vue-next'

const services = [
  {
    title: 'Property Acquisition Advisory',
    description: 'Helping buyers identify suitable properties, assess locations, evaluate pricing and navigate the acquisition process.',
    icon: Search
  },
  {
    title: 'Property Sales & Disposition',
    description: 'Strategic marketing and sales of residential properties, development land and investment assets.',
    icon: Home
  },
  {
    title: 'Land Acquisition & Advisory',
    description: 'Helping clients identify and evaluate land opportunities while considering location, title, development potential, infrastructure and market demand.',
    icon: Map
  },
  {
    title: 'Real Estate Investment Advisory',
    description: 'Helping investors understand: Acquisition price, development economics, rental potential, capital appreciation, exit strategy, development costs, location fundamentals, infrastructure, market risks.',
    icon: TrendingUp
  },
  {
    title: 'Development Advisory',
    description: 'Strategic support for developers and landowners around: development feasibility, product positioning, pricing, market research, development strategy, sales strategy, marketing, investor positioning.',
    icon: Building
  },
  {
    title: 'Joint Venture & Development Opportunities',
    description: 'Connecting landowners, developers and capital where appropriate and helping structure commercially viable development opportunities.',
    icon: Users
  },
  {
    title: 'Real Estate Marketing',
    description: 'Strategic marketing for developers, estates and property owners, including: Property campaigns, Video marketing, Social-media strategy, Project positioning, Launch campaigns, Investor-facing content.',
    icon: Megaphone
  }
]
</script>

<template>
  <section id="services" class="py-32 bg-brand-bg relative border-y border-white/5 overflow-hidden">
    <!-- Abstract glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div 
          class="max-w-2xl"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-8 h-[1px] bg-brand-gold"></div>
            <h2 class="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase">Expertise</h2>
          </div>
          <h3 class="text-4xl md:text-6xl font-heading font-bold text-white tracking-tighter">
            Premium Services
          </h3>
        </div>
        
        <p class="text-brand-text-muted font-light text-base md:text-lg max-w-md pb-2 leading-relaxed" v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1, transition: { duration: 1000, delay: 300 } }">
          A comprehensive suite of advisory services designed to navigate complex real estate landscapes.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="group relative bg-brand-surface/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-brand-surface hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
        >
          <div class="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-brand-accent/50 text-brand-text-muted group-hover:bg-brand-gold group-hover:text-brand-bg transition-all duration-500 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <component :is="service.icon" class="w-6 h-6 stroke-[1.5]" />
          </div>
          <div>
            <h4 class="text-xl font-heading font-bold text-white mb-4 group-hover:text-brand-gold transition-colors duration-300">
              {{ service.title }}
            </h4>
            <p class="text-brand-text-muted font-light leading-relaxed text-sm">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- The Duru Bond Approach -->
      <div class="mt-32 pt-20 relative">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-brand-gold/50 to-transparent"></div>
        
        <div class="flex items-center gap-4 mb-6 justify-center text-center">
          <div class="w-8 h-[1px] bg-brand-gold"></div>
          <h2 class="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase">Methodology</h2>
          <div class="w-8 h-[1px] bg-brand-gold"></div>
        </div>
        <h3 class="text-4xl md:text-5xl font-heading font-bold text-white tracking-tighter text-center mb-6">
          The Duru Bond Approach
        </h3>
        <p class="text-center text-brand-text-muted font-light max-w-2xl mx-auto mb-20 text-lg">
          Understand the asset before committing the money.
        </p>
        
        <div class="grid md:grid-cols-5 gap-4 relative">
          <!-- Connecting line for approach steps -->
          <div class="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>
          
          <div class="flex flex-col items-center text-center group relative z-10" v-motion :initial="{opacity:0, y:20}" :visibleOnce="{opacity:1, y:0, transition:{delay:100}}">
            <div class="w-16 h-16 rounded-full bg-brand-surface border border-white/10 text-brand-text-muted flex items-center justify-center font-heading text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-bg group-hover:border-brand-gold transition-all duration-500 shadow-xl">1</div>
            <h4 class="font-bold text-white mb-3 tracking-widest text-sm uppercase">Understand</h4>
            <p class="text-sm text-brand-text-muted font-light">Client objectives, budget and investment thesis.</p>
          </div>
          <div class="flex flex-col items-center text-center group relative z-10" v-motion :initial="{opacity:0, y:20}" :visibleOnce="{opacity:1, y:0, transition:{delay:200}}">
            <div class="w-16 h-16 rounded-full bg-brand-surface border border-white/10 text-brand-text-muted flex items-center justify-center font-heading text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-bg group-hover:border-brand-gold transition-all duration-500 shadow-xl">2</div>
            <h4 class="font-bold text-white mb-3 tracking-widest text-sm uppercase">Analyse</h4>
            <p class="text-sm text-brand-text-muted font-light">Location, property, title, pricing, development economics and market conditions.</p>
          </div>
          <div class="flex flex-col items-center text-center group relative z-10" v-motion :initial="{opacity:0, y:20}" :visibleOnce="{opacity:1, y:0, transition:{delay:300}}">
            <div class="w-16 h-16 rounded-full bg-brand-surface border border-white/10 text-brand-text-muted flex items-center justify-center font-heading text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-bg group-hover:border-brand-gold transition-all duration-500 shadow-xl">3</div>
            <h4 class="font-bold text-white mb-3 tracking-widest text-sm uppercase">Structure</h4>
            <p class="text-sm text-brand-text-muted font-light">Determine the appropriate acquisition, development or investment strategy.</p>
          </div>
          <div class="flex flex-col items-center text-center group relative z-10" v-motion :initial="{opacity:0, y:20}" :visibleOnce="{opacity:1, y:0, transition:{delay:400}}">
            <div class="w-16 h-16 rounded-full bg-brand-surface border border-white/10 text-brand-text-muted flex items-center justify-center font-heading text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-bg group-hover:border-brand-gold transition-all duration-500 shadow-xl">4</div>
            <h4 class="font-bold text-white mb-3 tracking-widest text-sm uppercase">Execute</h4>
            <p class="text-sm text-brand-text-muted font-light">Coordinate the transaction and relevant professional parties.</p>
          </div>
          <div class="flex flex-col items-center text-center group relative z-10" v-motion :initial="{opacity:0, y:20}" :visibleOnce="{opacity:1, y:0, transition:{delay:500}}">
            <div class="w-16 h-16 rounded-full bg-brand-surface border border-white/10 text-brand-text-muted flex items-center justify-center font-heading text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-bg group-hover:border-brand-gold transition-all duration-500 shadow-xl">5</div>
            <h4 class="font-bold text-white mb-3 tracking-widest text-sm uppercase">Position</h4>
            <p class="text-sm text-brand-text-muted font-light">Consider rental income, appreciation, development or eventual exit.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
