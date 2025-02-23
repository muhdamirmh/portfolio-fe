import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      hello: `print("hello world, i'm amir")`,
      welcome: `print("welcome")`,
    },
    ms: {
      hello: `print("hai dunia, saya ialah amir")`,
      welcome: `print("selamat datang")`,
    },
  },
})

const app = createApp(App)

export const updateLocale = (locale) => {
  i18n.global.locale.value = locale
  document.documentElement.lang = locale
  localStorage.locale = locale
  console.log("new locale: " + i18n.global.locale.value)

  //const currentPath = router.currentRoute.value.path; 

  /* // Remove locale from current path (if it exists)
  const pathWithoutLocale = currentPath.replace(/^\/([a-z]{2})\//, '/'); 

  // Construct new path with the updated locale
  const newPath = `/${locale}${pathWithoutLocale}`; 

  // Navigate to the new path, triggering a full page refresh
  window.location.href = newPath;  */
}
export const refreshPageAfterLocale = () => {
  let locale = i18n.global.locale.value 

  const currentPath = router.currentRoute.value.path;


  // Remove locale from current path (if it exists)
  const pathWithoutLocale = currentPath.replace(/^\/([a-z]{2})\//, '/'); 

  // Construct new path with the updated locale
  const newPath = `/${locale}${pathWithoutLocale}`; 

  // Navigate to the new path, triggering a full page refresh
  window.location.href = newPath;
}

app.use(router)
app.use(i18n)

app.mount('#app')
