<template>
  <main class="px-5 md:px-10 lg:px-20">
    <pfHeader @toggle-menu="handleMenuToggle" :disabled="isTransitioning" :menuOpen="menuOpen" />
    <div class="main-content no-scrollbar text-lg lg:text-xl xl:text-2xl font-extrabold">
      <transition
        name="slide-right"
        mode="out-in"
        @before-enter="changeTransition(true)"
        @after-enter="changeTransition(false)"
        @before-leave="changeTransition(true)"
        @after-leave="changeTransition(false)"
      >
        <RouterView v-if="!menuOpen" />
        <pfNav v-else @toggle-menu="handleMenuToggle" />
      </transition>
    </div>
    <pfFooter />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

import pfHeader from './components/pfHeader.vue'
import pfFooter from './components/pfFooter.vue'
import pfNav from './components/pfNav.vue'

const { locale } = useI18n({ useScope: 'global' })

const isMobile = ref(false)
const menuOpen = ref(false)
const isTransitioning = ref(false)

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768 // Adjust breakpoint as needed
}

const handleMenuToggle = (newMenuState) => {
  if (!isTransitioning.value) {
    menuOpen.value = newMenuState
  }
}

const changeTransition = (bool) => {
  isTransitioning.value = bool
}

const checkLocale = () => {
  if (localStorage.locale) {
    locale.value = localStorage.locale
  }
}

onMounted(() => {
  checkIfMobile()
  checkLocale()
  window.addEventListener('resize', checkIfMobile) // Check on window resize
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIfMobile) // Cleanup
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 1.5s ease-in-out;
}

.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-right-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
