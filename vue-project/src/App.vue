<template >
  
  <pfHeader @toggle-menu="handleMenuToggle" />
  <main>
    <RouterView v-if="!menuOpen" />
    <pfNav v-else />
  </main>
  
  <pfFooter />
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
const menuOpen = ref(false);

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768 // Adjust breakpoint as needed
}

const handleMenuToggle = (newMenuState) => {
  menuOpen.value = newMenuState;

};

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
