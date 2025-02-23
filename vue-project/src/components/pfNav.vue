<template>
  <nav class="flex h-full justify-center items-center">
    <ol class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl grid gap-y-5">
      <li>
        <router-link
          :to="{ name: 'Home', params: { locale: $route.params.locale } }"
          @click="toggleMenu"
          >home</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'About', params: { locale: $route.params.locale } }"
          @click="toggleMenu"
          >about</router-link
        >
      </li>
      <li><router-link to="/projects">projects</router-link></li>
      <li>
        <router-link
          :to="{ name: 'Experience', params: { locale: $route.params.locale } }"
          @click="toggleMenu"
          >experience</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'Skills', params: { locale: $route.params.locale } }"
          @click="toggleMenu"
          >skills</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'Contact', params: { locale: $route.params.locale } }"
          @click="toggleMenu"
          >contact</router-link
        >
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref(false)
const emit = defineEmits(['toggle-menu'])

const toggleMenu = () => {
  emit('toggle-menu', menu.value)
}
</script>

<style lang="scss" scoped></style>
