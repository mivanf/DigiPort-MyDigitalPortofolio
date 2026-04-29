<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isDark = ref(true)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Interests', href: '#interests' },
  { label: 'Projects', href: '#projects' },
]

function toggleTheme() {
  isDark.value = !isDark.value
  document.body.classList.toggle('light', !isDark.value)
  document.documentElement.classList.toggle('dark', isDark.value)
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    id="navbar"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-surface-900/80 backdrop-blur-xl shadow-lg shadow-surface-950/20'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a
          href="#"
          class="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent hover:from-primary-300 hover:to-primary-500 transition-all duration-300"
        >
          <span class="text-2xl">⚡</span>
          Portfolio
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="px-3 py-2 text-sm font-medium text-surface-300 hover:text-primary-400 rounded-lg hover:bg-surface-800/50 transition-all duration-200"
          >
            {{ link.label }}
          </a>

          <!-- Theme Toggle -->
          <button
            id="theme-toggle"
            @click="toggleTheme"
            class="ml-3 p-2 rounded-lg text-surface-400 hover:text-primary-400 hover:bg-surface-800/50 transition-all duration-200"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          id="mobile-menu-toggle"
          class="md:hidden p-2 rounded-lg text-surface-400 hover:text-primary-400 hover:bg-surface-800/50 transition-all duration-200"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-surface-900/95 backdrop-blur-xl border-b border-surface-700/50"
      >
        <div class="px-4 py-3 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="closeMobileMenu"
            class="block px-3 py-2.5 text-sm font-medium text-surface-300 hover:text-primary-400 rounded-lg hover:bg-surface-800/50 transition-all duration-200"
          >
            {{ link.label }}
          </a>
          <button
            @click="toggleTheme"
            class="flex items-center gap-2 w-full px-3 py-2.5 text-sm font-medium text-surface-300 hover:text-primary-400 rounded-lg hover:bg-surface-800/50 transition-all duration-200"
          >
            <span>{{ isDark ? '☀️ Light Mode' : '🌙 Dark Mode' }}</span>
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
