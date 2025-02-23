<template>
  <header class="navbar bg-sky-100 w-8/9">
    <div class="navbar-start text-xl">
      <button class="cursor-pointer" @click="toggleMenu(false)" :disabled="props.disabled">
        muhdamirmh
      </button>
    </div>
    <div class="navbar-end">
      <ul class="grid grid-cols-3 place-items-center">
        <li class="flex">
          <button class="cursor-pointer" @click="toggleLocale">{{ toggleLocaleText }}</button>
        </li>
        <li class="flex"><p class="text-lg">|</p></li>
        <li class="flex">
          <button class="cursor-pointer" @click="toggleMenu" :disabled="props.disabled">
            <img
              :src="props.menuOpen ? '/close-menu.svg' : '/open-menu.svg'"
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
import { computed } from 'vue'
import { updateLocale, refreshPageAfterLocale } from '../main.js'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const { locale } = useI18n({ useScope: 'global' })
const emit = defineEmits(['toggle-menu'])

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  menuOpen: {
    type: Boolean,
    required: true,
  },
})

const toggleLocale = () => {
  const newLocale = locale.value === 'en' ? 'ms' : 'en'
  updateLocale(newLocale)
  refreshPageAfterLocale()
}

const toggleMenu = (bool = true) => {
  let menu = props.menuOpen
  if (bool) {
    menu = !props.menuOpen
  } else {
    menu = false
    router.push({
      name: 'Home',
      params: { locale: route.params.locale } 
    })
  }

  emit('toggle-menu', menu)
}

const toggleLocaleText = computed(() => {
  return locale.value === 'en' ? 'ms' : 'en'
})
</script>

<style lang="scss" scoped></style>
