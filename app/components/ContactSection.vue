<script setup lang="ts">
// Contact Section
</script>

<template>
  <section id="contact" class="py-32 bg-brand-bg relative overflow-hidden">
    <!-- Abstract architectural lines -->
    <div class="absolute inset-0 pointer-events-none opacity-10">
      <div class="absolute top-0 right-1/4 w-[1px] h-full bg-brand-gold"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-16 relative z-10">
      
      <!-- Contact Info -->
      <div 
        v-motion
        :initial="{ opacity: 0, x: -30 }"
        :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
      >
        <div class="flex items-center gap-4 mb-4">
          <div class="w-8 h-[1px] bg-brand-gold"></div>
          <h2 class="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase">Get In Touch</h2>
        </div>
        <h3 class="text-4xl md:text-6xl font-heading font-bold text-white leading-tight tracking-tighter mb-8">
          Let's Start a <br /> <span class="font-medium text-brand-gold">Conversation.</span>
        </h3>
        
        <p class="text-brand-text-muted font-light leading-relaxed mb-12 max-w-md">
          Whether you're looking for advisory services, investment insights, or partnership opportunities, I'm just a message away.
        </p>

        <div class="space-y-10">
          <div class="flex items-start gap-6 group">
            <div class="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center shrink-0 bg-brand-surface group-hover:bg-brand-gold transition-colors duration-300">
              <svg class="w-5 h-5 text-white group-hover:text-brand-bg transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <p class="text-xs tracking-[0.2em] font-bold text-brand-gold mb-2 uppercase">Email</p>
              <a href="mailto:contact@durubond.com" class="text-white hover:text-brand-gold font-light transition-colors text-lg">contact@durubond.com</a>
            </div>
          </div>
          
          <div class="flex items-start gap-6 group">
            <div class="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center shrink-0 bg-brand-surface group-hover:bg-brand-gold transition-colors duration-300">
              <svg class="w-5 h-5 text-white group-hover:text-brand-bg transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <p class="text-xs tracking-[0.2em] font-bold text-brand-gold mb-2 uppercase">Office</p>
              <p class="text-white font-light text-lg">Poise Nigeria Building, Pinnock Beach Estate, Jakande Lagos</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div 
        class="bg-brand-surface p-8 md:p-12 border border-white/5 relative rounded-2xl shadow-2xl"
        v-motion
        :initial="{ opacity: 0, x: 30 }"
        :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
      >
        <div class="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-brand-gold opacity-50"></div>
        <div class="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-brand-gold opacity-50"></div>

        <form action="mailto:contact@durubond.com" method="post" enctype="text/plain" class="space-y-6">
          <div class="grid grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="firstName" class="text-xs font-bold tracking-[0.2em] uppercase text-white/50 pl-2">First Name</label>
              <input type="text" id="firstName" name="First Name" class="w-full bg-brand-bg border border-white/10 rounded-xl focus:border-brand-gold focus:ring-1 focus:ring-brand-gold px-5 py-4 outline-none transition-all text-sm text-white placeholder-white/20 font-light" placeholder="John" required />
            </div>
            <div class="space-y-2">
              <label for="lastName" class="text-xs font-bold tracking-[0.2em] uppercase text-white/50 pl-2">Last Name</label>
              <input type="text" id="lastName" name="Last Name" class="w-full bg-brand-bg border border-white/10 rounded-xl focus:border-brand-gold focus:ring-1 focus:ring-brand-gold px-5 py-4 outline-none transition-all text-sm text-white placeholder-white/20 font-light" placeholder="Doe" required />
            </div>
          </div>
          
          <div class="space-y-2">
            <label for="email" class="text-xs font-bold tracking-[0.2em] uppercase text-white/50 pl-2">Email Address</label>
            <input type="email" id="email" name="Email" class="w-full bg-brand-bg border border-white/10 rounded-xl focus:border-brand-gold focus:ring-1 focus:ring-brand-gold px-5 py-4 outline-none transition-all text-sm text-white placeholder-white/20 font-light" placeholder="john@example.com" required />
          </div>
          
          <div class="space-y-2">
            <label for="message" class="text-xs font-bold tracking-[0.2em] uppercase text-white/50 pl-2">Message</label>
            <textarea id="message" name="Message" rows="5" class="w-full bg-brand-bg border border-white/10 rounded-xl focus:border-brand-gold focus:ring-1 focus:ring-brand-gold px-5 py-4 outline-none transition-all text-sm text-white placeholder-white/20 font-light resize-none" placeholder="How can I help you?" required></textarea>
          </div>
          
          <button type="submit" class="w-full group relative bg-brand-gold text-brand-bg hover:text-white font-bold tracking-[0.2em] uppercase text-sm py-5 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
            <span class="relative z-10 transition-colors">Send Message</span>
            <div class="absolute inset-0 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
          </button>
        </form>
      </div>

    </div>
  </section>
</template>
