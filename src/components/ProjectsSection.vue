<script setup lang="ts">
import type { Project } from '../data/portfolio'
import ProjectCard from './ProjectCard.vue'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <section id="projects" class="relative">
    <div class="section-container">
      <h2 class="section-title">📂 Proyek Kuliah</h2>
      <p class="section-subtitle">Proyek yang pernah saya kerjakan selama perkuliahan</p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="animate-fade-in-up"
          :style="{ animationDelay: index * 0.1 + 's' }"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>
