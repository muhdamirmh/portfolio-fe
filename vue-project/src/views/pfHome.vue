<template>
  <div class="flex flex-col justify-center text-center text-3xl font-extrabold h-full">
    <div id="output">{{ output }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isMobile = ref(false)
//const ctnt = `print("hello world, i'm amir")`
const ctnt = t('hello')

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768 // Adjust breakpoint as needed
}

const theLetters = 'abcdefghijklmnopqrstuvwxyz#%&^+=-'
const speed = 70
const increment = 2

const output = ref('')

let clen = ctnt.length
let si = 0
let stri = 0
let block = ''
let fixed = ''
let intervalId

const nextFrame = () => {
  block = ''
  for (let i = 0; i < clen - stri; i++) {
    const num = Math.floor(Math.random() * theLetters.length)
    const letter = theLetters.charAt(num)
    block += letter
  }
  if (si === increment - 1) {
    stri++
  }
  if (si === increment) {
    fixed += ctnt.charAt(stri - 1)
    si = 0
  }
  output.value = fixed + block
}

const rustle = () => {
  intervalId = setInterval(() => {
    nextFrame()
    si++
  }, speed)
}

onMounted(() => {
  checkIfMobile() // Check on initial load
  rustle()
  window.addEventListener('resize', checkIfMobile) // Check on window resize
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIfMobile) // Cleanup
  clearInterval(intervalId)
})
</script>

<style scoped></style>
