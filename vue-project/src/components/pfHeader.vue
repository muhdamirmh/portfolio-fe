<template>
  
  <header class="navbar bg-sky-100 px-5 md:px-10 lg:px-20">
    
    <div class="navbar-start text-xl">
      <a class="cursor-pointer">kx.rmx</a>
    </div>
    <div class="navbar-end">
      <!-- <button class="cursor-pointer px-4" @click="toggleLocale">{{ toggleLocaleText }}</button>
      <p class="text-lg">|</p>
      <ul class="menu xl:menu-horizontal grid grid-cols-3">
        <li><a>home</a></li>
        <li><a>about</a></li>
        <li><a>projects</a></li>
        <li><a>experience</a></li>
        <li><a>skills</a></li>
        <li><a>contact</a></li>
      </ul> -->
      <ul class="grid grid-cols-3 place-items-center">
        <li class="flex">
          <button class="cursor-pointer" @click="toggleLocale">{{ toggleLocaleText }}</button>
        </li>
        <li class="flex"><p class="text-lg">|</p></li>
        <li class="flex">
          <button class="cursor-pointer" @click="toggleMenu">
            <img
              :src="menu ? '/close-menu.svg' : '/open-menu.svg'"
              alt="Menu"
              width="30"
              loading="lazy"
            />
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { updateLocale } from '../main.js'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

const menu = ref(false)

const toggleLocale = () => {
  const newLocale = locale.value === 'en' ? 'ms' : 'en'
  updateLocale(newLocale)
}

const toggleMenu = () => {
  menu.value = !menu.value
}

const toggleLocaleText = computed(() => {
  return locale.value === 'en' ? 'ms' : 'en'
})
</script>

<style lang="scss" scoped>

</style>
