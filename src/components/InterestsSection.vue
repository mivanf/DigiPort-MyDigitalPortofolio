<script setup lang="ts">
import type { Interest, Language } from '../data/portfolio'

defineProps<{
  interests: Interest[]
  languages: Language[]
}>()

function getProficiencyWidth(p: string): string {
  const map: Record<string, string> = { Native: '100%', Fluent: '85%', Intermediate: '60%', Beginner: '30%' }
  return map[p] || '50%'
}
</script>

<template>
  <section id="interests" class="relative">
    <div class="section-container">
      <h2 class="section-title">✨ Interests & Languages</h2>
      <p class="section-subtitle">Hal-hal yang saya minati dan bahasa yang saya kuasai</p>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Interests -->
        <div class="glass-card p-6 animate-fade-in-up">
          <h3 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <span class="text-xl">🎯</span> Interests
          </h3>
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="(interest, i) in interests"
              :key="i"
              class="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/30 hover:border-primary-500/40 hover:bg-surface-800/80 transition-all duration-200 group cursor-default"
            >
              <span class="text-2xl group-hover:scale-110 transition-transform">{{ interest.icon }}</span>
              <span class="text-surface-200 text-sm font-medium group-hover:text-primary-400 transition-colors">{{ interest.name }}</span>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div class="glass-card p-6 animate-fade-in-up stagger-2">
          <h3 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <span class="text-xl">🗣️</span> Languages
          </h3>
          <div class="space-y-5">
            <div v-for="(lang, i) in languages" :key="i">
              <div class="flex items-center justify-between mb-2">
                <span class="text-surface-200 font-medium">{{ lang.name }}</span>
                <span class="text-xs text-primary-400 font-medium bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20">
                  {{ lang.proficiency }}
                </span>
              </div>
              <div class="h-2 bg-surface-800 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-700"
                  :style="{ width: getProficiencyWidth(lang.proficiency) }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
