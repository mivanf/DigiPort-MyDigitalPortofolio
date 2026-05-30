<script setup lang="ts">
import type { SkillCategory } from '../data/portfolio'

defineProps<{
  skills: SkillCategory[]
}>()

function getLevelLabel(l: number): string {
  return ['', 'Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Expert'][l] || ''
}

function isImageIcon(icon?: string): boolean {
  if (!icon) return false
  return (
    icon.endsWith('.png') ||
    icon.endsWith('.jpg') ||
    icon.endsWith('.jpeg') ||
    icon.endsWith('.svg') ||
    icon.startsWith('/') ||
    icon.startsWith('http') ||
    icon.startsWith('data:')
  )
}
</script>

<template>
  <section id="skills" class="relative">
    <div class="section-container">
      <h2 class="section-title">🚀 Skills</h2>
      <p class="section-subtitle">Kemampuan teknis dan interpersonal saya</p>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(sc, i) in skills"
          :key="sc.category"
          class="glass-card p-6 animate-fade-in-up"
          :style="{ animationDelay: i * 0.15 + 's' }"
        >
          <h3 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
            {{ sc.category }}
          </h3>
          <div class="space-y-4">
            <div v-for="s in sc.items" :key="s.name" class="group">
              <div class="flex items-center justify-between mb-1.5">
                <span class="flex items-center gap-2 text-surface-200 font-medium text-sm group-hover:text-primary-400 transition-colors">
                  <span v-if="s.icon" class="text-base flex items-center shrink-0">
                    <img v-if="isImageIcon(s.icon)" :src="s.icon" :alt="s.name" class="w-5 h-5 object-contain" />
                    <span v-else>{{ s.icon }}</span>
                  </span>
                  {{ s.name }}
                </span>
                <span v-if="s.level" class="text-xs text-surface-500">{{ getLevelLabel(s.level) }}</span>
              </div>
              <div v-if="s.level" class="h-2 bg-surface-800 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-700" :style="{ width: (s.level / 5) * 100 + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
