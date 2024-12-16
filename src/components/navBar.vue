<template>
  <nav class="w-full flex flex-col fixed z-50">
    <div
      class="rounded-b-3xl flex flex-col gap-y-1.5 py-5 px-6 items-start transition ease-linear duration-500 bg-[var(--color-1-1)] bg-gradient-to-tr from-[var(--color-1-1)] from-33% via-66% to-100% via-[var(--color-1-5)] to-[var(--color-1-4)]"
      :style="{ transform: isExpanded ? 'translateY(0)' : 'translateY(-100%)' }"
    >
      <p class="rotating-text">karma.dev</p>
      <div
        v-for="link in links"
        :key="link.to"
        class="w-full rounded-full border-2 border-[var(--color-1-2)] bg-transparent py-2 text-center text-[var(--color-1-2)] text-2xl tracking-[.2em] hover:bg-gradient-to-tr from-gray-700 to-gray-500 transition-colors ease-linear duration-1000"
      >
        <button @click="scrollToSection(link.id)">{{ link.text }}</button>
      </div>
    </div>

    <button
      @click="toggleNav"
      class="w-auto rounded-full bg-[var(--color-1-1)] m-2 self-end transition ease-linear duration-500"
      :style="{ transform: isExpanded ? 'translateY(0)' : 'translateY(-800%)' }"
    >
      <template v-if="isExpanded">
        <img src="/close.svg" alt="Toggle Navigation" class="w-10" />
      </template>
      <template v-else>
        <img src="/dashboard.svg" alt="Toggle Navigation" class="w-10" />
      </template>
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

const links = [
  { to: '/', text: 'home', id: 'home' },
  { to: '/#projects', text: 'projects', id: 'projects' },
  { to: '/#about', text: 'about', id: 'about' },
  { to: '/#contact', text: 'contact', id: 'contact' },
]

const toggleNav = () => {
  isExpanded.value = !isExpanded.value
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  } else {
    console.error(`Section with ID "${sectionId}" not found.`)
  }
}
</script>

<style scoped>
.rotating-text {
  animation: rotate3d 10s infinite linear;
  text-align: center;
  flex:auto;
  flex-direction: row;
  align-self: center;
  color: var(--color-1-2);
  font-size: xx-large;
}

@keyframes rotate3d {
  0% {
    transform: perspective(500px) rotateY(0deg);
  }
  100% {
    transform: perspective(500px) rotateY(360deg);
  }
}

</style>
