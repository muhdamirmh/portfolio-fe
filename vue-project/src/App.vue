<template >
  <pfSidebar v-if="isMobile" />
  <pfHeader v-else />

  <RouterView :class="{ 'pt-(--header-height)': !isMobile }" />
  <pfFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

import pfHeader from './components/pfHeader.vue'
import pfFooter from './components/pfFooter.vue'
import pfSidebar from './components/pfSidebar.vue'

const isMobile = ref(false)

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768 // Adjust breakpoint as needed
}

onMounted(() => {
  checkIfMobile() // Check on initial load
  window.addEventListener('resize', checkIfMobile) // Check on window resize
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIfMobile) // Cleanup
})
</script>
