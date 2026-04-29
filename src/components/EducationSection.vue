<script setup lang="ts">
import type { Education } from '../data/portfolio'

defineProps<{
  education: Education[]
}>()
</script>

<template>
  <section id="education" class="relative">
    <div class="section-container">
      <h2 class="section-title">🎓 Pendidikan</h2>
      <p class="section-subtitle">Riwayat pendidikan formal saya</p>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent"></div>

        <!-- Timeline items -->
        <div class="space-y-8">
          <div
            v-for="(edu, index) in education"
            :key="index"
            class="relative pl-12 md:pl-20 animate-fade-in-up"
            :style="{ animationDelay: index * 0.15 + 's' }"
          >
            <!-- Timeline dot -->
            <div class="absolute left-2.5 md:left-6.5 top-6 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-surface-900 shadow-lg shadow-primary-500/50"></div>

            <!-- Card -->
            <div class="glass-card p-6">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 class="text-xl font-bold text-white">{{ edu.institution }}</h3>
                  <p class="text-primary-400 font-medium">{{ edu.degree }} — {{ edu.field }}</p>
                </div>
                <div class="flex items-center gap-3 shrink-0">
                  <span
                    v-if="edu.gpa"
                    class="text-sm font-semibold text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20"
                  >
                    IPK {{ edu.gpa }}
                  </span>
                  <span class="text-sm text-surface-400 bg-surface-800/80 px-3 py-1 rounded-full border border-surface-700/50">
                    {{ edu.startYear }} — {{ edu.endYear ?? 'Sekarang' }}
                  </span>
                </div>
              </div>
              <p v-if="edu.description" class="text-surface-300 leading-relaxed">
                {{ edu.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
