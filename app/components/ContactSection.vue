<script setup lang="ts">
// Contact Section
</script>

<template>
  <section id="contact" class="py-32 bg-brand-bg relative">
    <div class="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
      
      <!-- Contact Info -->
      <div 
        v-motion
        :initial="{ opacity: 0, x: -30 }"
        :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
      >
        <div class="flex items-center gap-4 mb-4">
          <div class="w-8 h-[1px] bg-brand-gold"></div>
          <h2 class="text-brand-gold font-bold tracking-widest text-xs">Get In Touch</h2>
        </div>
        <h3 class="text-3xl md:text-5xl font-heading font-bold text-brand-navy leading-tight tracking-tight mb-8">
          Let's Start a <br /> Conversation.
        </h3>
        
        <p class="text-gray-600 mb-12 max-w-md">
          Whether you're looking for advisory services or partnership opportunities, I'm just a message away.
        </p>

        <div class="space-y-8">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 border border-brand-navy/10 flex items-center justify-center shrink-0">
              <svg class="w-4 h-4 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <p class="text-xs tracking-widest font-bold text-brand-gold mb-1">Email</p>
              <a href="mailto:contact@durubond.com" class="text-brand-navy hover:text-brand-gold font-medium transition-colors">contact@durubond.com</a>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 border border-brand-navy/10 flex items-center justify-center shrink-0">
              <svg class="w-4 h-4 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <p class="text-xs tracking-widest font-bold text-brand-gold mb-1">Office</p>
              <p class="text-gray-600">Sandton, Johannesburg, South Africa</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div 
        class="bg-white p-8 md:p-12 border border-brand-navy/10 relative"
        v-motion
        :initial="{ opacity: 0, x: 30 }"
        :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
      >
        <div class="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-brand-gold"></div>
        <div class="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-brand-gold"></div>

        <form action="mailto:contact@durubond.com" method="post" enctype="text/plain" class="space-y-6">
          <div class="grid grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="firstName" class="text-xs font-bold tracking-widest text-brand-navy">First Name</label>
              <input type="text" id="firstName" name="First Name" class="w-full bg-brand-bg/50 border border-transparent focus:border-brand-navy/20 px-4 py-3 outline-none transition-colors text-sm" placeholder="John" required />
            </div>
            <div class="space-y-2">
              <label for="lastName" class="text-xs font-bold tracking-widest text-brand-navy">Last Name</label>
              <input type="text" id="lastName" name="Last Name" class="w-full bg-brand-bg/50 border border-transparent focus:border-brand-navy/20 px-4 py-3 outline-none transition-colors text-sm" placeholder="Doe" required />
            </div>
          </div>
          
          <div class="space-y-2">
            <label for="email" class="text-xs font-bold tracking-widest text-brand-navy">Email Address</label>
            <input type="email" id="email" name="Email" class="w-full bg-brand-bg/50 border border-transparent focus:border-brand-navy/20 px-4 py-3 outline-none transition-colors text-sm" placeholder="john@example.com" required />
          </div>
          
          <div class="space-y-2">
            <label for="message" class="text-xs font-bold tracking-widest text-brand-navy">Message</label>
            <textarea id="message" name="Message" rows="4" class="w-full bg-brand-bg/50 border border-transparent focus:border-brand-navy/20 px-4 py-3 outline-none transition-colors text-sm resize-none" placeholder="How can I help you?" required></textarea>
          </div>
          
          <button type="submit" class="w-full bg-brand-navy text-white font-bold tracking-widest text-sm py-4 hover:bg-brand-navy-dark transition-colors">
            Send Message
          </button>
        </form>
      </div>

    </div>
  </section>
</template>
