<script setup lang="ts">
import { TrendingUp, Briefcase, BarChart, MessageSquare } from 'lucide-vue-next'

const services = [
  {
    title: 'Property Investment',
    description: 'Data-driven insights to identify high-yield investment properties.',
    icon: TrendingUp
  },
  {
    title: 'Portfolio Management',
    description: 'Comprehensive oversight to maximize returns and minimize risks across your assets.',
    icon: Briefcase
  },
  {
    title: 'Market Analysis',
    description: 'In-depth market research to stay ahead of trends and uncover emerging opportunities.',
    icon: BarChart
  },
  {
    title: 'Consultation & Strategy',
    description: 'Personalized advisory sessions tailored to your unique real estate goals.',
    icon: MessageSquare
  }
]
</script>

<template>
  <section id="services" class="py-32 bg-white relative border-y border-brand-navy/5">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div 
          class="max-w-2xl"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-8 h-[1px] bg-brand-gold"></div>
            <h2 class="text-brand-gold font-bold tracking-widest text-xs">Expertise</h2>
          </div>
          <h3 class="text-3xl md:text-5xl font-heading font-bold text-brand-navy tracking-tight">
            Premium Services
          </h3>
        </div>
        
        <p class="text-gray-500 text-base md:text-lg max-w-md pb-2" v-motion :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1, transition: { duration: 1000, delay: 300 } }">
          A comprehensive suite of advisory services designed to navigate complex real estate landscapes.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-x-12 gap-y-16">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="group relative flex flex-col md:flex-row gap-6 items-start"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
        >
          <div class="w-16 h-16 shrink-0 border border-brand-navy/10 flex items-center justify-center bg-white group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
            <component :is="service.icon" class="w-6 h-6 stroke-[1.5]" />
          </div>
          <div>
            <h4 class="text-xl font-heading font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors duration-300">
              {{ service.title }}
            </h4>
            <p class="text-gray-600 leading-relaxed text-sm">
              {{ service.description }}
            </p>
          </div>
          <!-- Decorative line -->
          <div class="absolute -bottom-8 left-0 w-full h-[1px] bg-brand-navy/5 hidden md:block"></div>
        </div>
      </div>
    </div>
  </section>
</template>
