<script setup lang="ts">
import type { Project } from '../data/portfolio'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="glass-card overflow-hidden group">
    <!-- Image / Placeholder -->
    <div class="relative h-48 bg-gradient-to-br from-primary-900/40 to-surface-800 overflow-hidden">
      <img
        v-if="project.imageUrl"
        :src="project.imageUrl"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <div class="text-center">
          <div class="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🚀</div>
          <p class="text-surface-500 text-sm">{{ project.course || 'Project' }}</p>
        </div>
      </div>
      <!-- Overlay on hover -->
      <div class="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-surface-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <div class="flex items-start justify-between gap-2 mb-3">
        <h3 class="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
          {{ project.title }}
        </h3>
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener"
          class="shrink-0 p-1.5 rounded-lg text-surface-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all"
          aria-label="Open project link"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <p v-if="project.course" class="text-xs text-primary-400 font-medium mb-2">
        📚 {{ project.course }}
      </p>

      <p class="text-surface-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Tech badges -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="text-xs font-medium px-2.5 py-1 rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
