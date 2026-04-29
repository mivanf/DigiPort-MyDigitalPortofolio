<script setup lang="ts">
import { portfolioData } from './data/portfolio'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import EducationSection from './components/EducationSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import InterestsSection from './components/InterestsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import FooterSection from './components/FooterSection.vue'

const {
  biodata,
  education,
  experiences,
  skills,
  interests,
  languages,
  projects,
} = portfolioData
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main>
      <HeroSection :biodata="biodata" />
      <EducationSection :education="education" />
      <ExperienceSection :experiences="experiences" />
      <SkillsSection :skills="skills" />
      <InterestsSection :interests="interests" :languages="languages" />
      <ProjectsSection :projects="projects" />
    </main>
    <FooterSection :biodata="biodata" />
  </div>
</template>
