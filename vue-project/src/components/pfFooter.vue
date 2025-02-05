<template>
  <footer
    class="footer footer-horizontal bg-blue-900/90 text-neutral-content items-center px-10"
  >
    <aside class="grid-flow-col items-center">
      <p>kx.rmx @ {{ new Date().getFullYear() }}</p>
      <p>{{ t('hello') }}</p>
      <div class="text-lg">|</div>
      <button @click="changeLocale('en')"> <img src="/en.svg" width="30" /></button>
      <button @click="changeLocale('ms')"> <img src="/ms.svg" width="30" /></button>
    </aside>
    <nav class="grid-flow-col gap-4 place-self-center justify-self-end">
      <a> <img src="/linkedin.svg" width="30" /></a>
      
    </nav>
  </footer>
</template>

<script setup>
import { updateLocale } from '../main.js';
import { useI18n } from 'vue-i18n'
const { t } = useI18n() 

const changeLocale = (locale) => {
  updateLocale(locale); 
};



</script>

<style lang="scss" scoped></style>
