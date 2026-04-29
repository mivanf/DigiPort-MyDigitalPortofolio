<script setup lang="ts">
import type { Biodata } from '../data/portfolio'

defineProps<{
  biodata: Biodata
}>()
</script>

<template>
  <section id="about" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background gradient orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float" style="animation-delay: 1.5s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="section-container relative z-10">
      <div class="grid md:grid-cols-5 gap-10 items-center">
        <!-- Text Content -->
        <div class="md:col-span-3 space-y-6 animate-fade-in-up">
          <div>
            <p class="text-primary-400 font-semibold text-lg mb-2 tracking-wide">👋 Halo, saya</p>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {{ biodata.name }}
            </h1>
            <p class="text-xl sm:text-2xl text-surface-400 mt-3 font-medium">
              {{ biodata.title }} — {{ biodata.university }}
            </p>
          </div>

          <p class="text-surface-300 text-lg leading-relaxed max-w-2xl">
            {{ biodata.about }}
          </p>

          <!-- Contact Info Badges -->
          <div class="flex flex-wrap gap-3">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/80 border border-surface-700/50 text-surface-300 text-sm">
              📍 {{ biodata.location }}
            </span>
            <a
              :href="'mailto:' + biodata.email"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/80 border border-surface-700/50 text-surface-300 text-sm hover:border-primary-500/50 hover:text-primary-400 transition-all duration-200"
            >
              ✉️ {{ biodata.email }}
            </a>
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/80 border border-surface-700/50 text-surface-300 text-sm">
              📱 {{ biodata.phone }}
            </span>
          </div>

          <!-- Social Links -->
          <div class="flex gap-3 pt-2">
            <a
              v-if="biodata.linkedin"
              :href="biodata.linkedin"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a
              v-if="biodata.github"
              :href="biodata.github"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-800 hover:bg-surface-700 text-surface-200 font-medium rounded-xl border border-surface-700/50 hover:border-surface-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- Profile Photo -->
        <div class="md:col-span-2 flex justify-center animate-fade-in-up stagger-2">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
            <div class="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl shadow-primary-500/20">
              <img
                :src="biodata.photoUrl"
                :alt="biodata.name"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#education" class="text-surface-500 hover:text-primary-400 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
