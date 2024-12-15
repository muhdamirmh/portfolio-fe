<template>
  <nav class="w-full flex flex-col fixed">
    <div
      class="rounded-b-3xl flex flex-col gap-y-1.5 py-5 px-6 items-start transition ease-linear duration-500 bg-[var(--color-1)] bg-gradient-to-tr from-[var(--color-1)] from-33% via-66% to-100% via-[var(--color-5)] to-[var(--color-4)] "
      :style="{ transform: isExpanded ? 'translateY(0)' : 'translateY(-100%)' }"
    >
      <div
        v-for="link in links"
        :key="link.to"
        class="w-full rounded-full border-2 border-[var(--color-2)] bg-transparent py-2 text-center text-[var(--color-2)] text-2xl tracking-widest hover:bg-gradient-to-tr from-gray-700 to-gray-500 transition-colors ease-linear duration-1000"
      >
        <router-link :to="link.to">{{ link.text }}</router-link>
      </div>
    </div>

    <button
      @click="toggleNav"
      class="w-auto rounded-full bg-[var(--color-1)] m-2 self-end transition ease-linear duration-500"
      :style="{ transform: isExpanded ? 'translateY(0)' : 'translateY(-675%)' }"
    >
      <template v-if="isExpanded">
        <img src="../assets/close.svg" alt="Toggle Navigation" class="w-10" />
      </template>
      <template v-else>
        <img src="../assets/dashboard.svg" alt="Toggle Navigation" class="w-10" />
      </template>
    </button>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'

const isExpanded = ref(false)

const links = [
  { to: '/', text: 'HOME' },
  { to: '/about', text: 'ABOUT' },
  { to: '/projects', text: 'PROJECTS' },
  { to: '/contact', text: 'CONTACT' },
]

const color = 'red'

const toggleNav = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.wide-font {
  font-stretch: extra-expanded;
}
</style>
