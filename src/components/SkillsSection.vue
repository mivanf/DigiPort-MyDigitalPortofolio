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
      <p class="section-subtitle">My technical and interpersonal skills</p>

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
                    <svg
                      v-if="s.name === 'Git & GitHub'"
                      class="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <img v-else-if="isImageIcon(s.icon)" :src="s.icon" :alt="s.name" class="w-5 h-5 object-contain" />
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
