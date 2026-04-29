<script setup lang="ts">
import type { OrganizationExperience } from '../data/portfolio'

defineProps<{
  experiences: OrganizationExperience[]
}>()

function getTypeBadge(type: 'organisasi' | 'kepanitiaan') {
  return type === 'organisasi'
    ? { label: 'Organisasi', color: 'bg-primary-500/15 text-primary-400 border-primary-500/25' }
    : { label: 'Kepanitiaan', color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' }
}
</script>

<template>
  <section id="experience" class="relative">
    <div class="section-container">
      <h2 class="section-title">💼 Pengalaman</h2>
      <p class="section-subtitle">Organisasi dan kepanitiaan yang pernah saya ikuti</p>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent"></div>

        <div class="space-y-8">
          <div
            v-for="(exp, index) in experiences"
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
                  <h3 class="text-xl font-bold text-white">{{ exp.organization }}</h3>
                  <p class="text-primary-400 font-medium">{{ exp.role }}</p>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <span
                    class="text-xs font-medium px-3 py-1 rounded-full border"
                    :class="getTypeBadge(exp.type).color"
                  >
                    {{ getTypeBadge(exp.type).label }}
                  </span>
                  <span class="text-sm text-surface-400 bg-surface-800/80 px-3 py-1 rounded-full border border-surface-700/50">
                    {{ exp.startDate }} — {{ exp.endDate ?? 'Sekarang' }}
                  </span>
                </div>
              </div>
              <ul class="space-y-2">
                <li
                  v-for="(desc, i) in exp.descriptions"
                  :key="i"
                  class="flex items-start gap-2 text-surface-300"
                >
                  <span class="text-primary-400 mt-1.5 shrink-0">▹</span>
                  <span>{{ desc }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
