<template>
  <main>
    lel
    <div class="btn btn-neutral">
      lel
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(false);

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768; // Adjust breakpoint as needed
};

onMounted(() => {
  checkIfMobile(); // Check on initial load
  window.addEventListener('resize', checkIfMobile); // Check on window resize
});

onUnmounted(() => {
  window.removeEventListener('resize', checkIfMobile); // Cleanup
});

</script>
