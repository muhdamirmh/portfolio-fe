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
      hello: 'hello world',
    },
    ms: {
      hello: 'hai dunia',
    },
  },
})

const app = createApp(App)

export const updateLocale = (locale) => {
  i18n.global.locale.value = locale
  localStorage.locale = locale
}

app.use(router)
app.use(i18n)

app.mount('#app')
