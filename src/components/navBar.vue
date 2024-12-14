<template>
  <nav class="w-full flex flex-col">
    <div
      class="rounded-b-3xl flex flex-col gap-y-1.5 py-6 px-6 items-start bg-gray-900 transition ease-linear duration-500"
      :style="{ transform: isExpanded ? 'translateY(0)' : 'translateY(-100%)' }"
    >
      <div
        v-for="link in links"
        :key="link.to"
        class="w-full rounded-full border-slate-500 border-2 bg-transparent text-white py-2 font-bold text-center hover:bg-gradient-to-tr from-gray-700 to-gray-500 transition-colors ease-linear duration-1000"
      >
        <router-link :to="link.to">{{ link.text }}</router-link>
      </div>
    </div>

    <button
      @click="toggleNav"
      class="w-auto rounded-full bg-gray-700 m-2 self-end transition ease-linear duration-500"
      :style="{ transform: isExpanded ? 'translateY(0)' : 'translateY(-500%)' }"
    >
      <img class="w-12" src="../assets/dashboard.svg" alt="Toggle Navigation" />
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

const links = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/projects', text: 'Projects' },
  { to: '/contact', text: 'Contact' },
]

const toggleNav = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped></style>
