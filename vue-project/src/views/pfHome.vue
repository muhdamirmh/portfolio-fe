<template>
  <div class="flex flex-col justify-center text-center text-xl lg:text-2xl xl:text-3xl h-full">
    <div id="output">{{ output }}</div>
    <div v-if="firstDone" id="output2">{{ secondOutput }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isMobile = ref(false)
const ctnt1 = t('hello') // First sentence
const ctnt2 = t('welcome') // Second sentence
const targetContents = [ctnt1, ctnt2]; // Array to hold target sentences

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768 // Adjust breakpoint as needed
}

const theLetters = 'abcdefghijklmnopqrstuvwxyz#%&^+=-'
const speed = 65
const increment = 2

const output = ref('')
const secondOutput = ref('') 
const firstDone = ref(false)

let currentSentenceIndex = 0; // Track which sentence is currently being displayed
let clen = targetContents[currentSentenceIndex].length 
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
    fixed += targetContents[currentSentenceIndex].charAt(stri - 1)
    si = 0
  }
  output.value = fixed + block

  // Check if the output matches the current target sentence
  if (output.value === targetContents[currentSentenceIndex]) {
    clearInterval(intervalId) 
    if (currentSentenceIndex < targetContents.length - 1) {
      setTimeout(() => {
        currentSentenceIndex++;
        firstDone.value = true; 
        clen = targetContents[currentSentenceIndex].length;
        stri = 0;
        fixed = ''; 
        intervalId = setInterval(() => {
          nextFrame2(); 
          si++;
        }, speed); 
      }, 1000); // 2000ms delay (2 seconds)
    } 
  }
}

const nextFrame2 = () => {
  block = '';
  for (let i = 0; i < clen - stri; i++) {
    const num = Math.floor(Math.random() * theLetters.length)
    const letter = theLetters.charAt(num)
    block += letter;
  }
  if (si === increment - 1) {
    stri++;
  }
  if (si === increment) {
    fixed += ctnt2.charAt(stri - 1);
    si = 0;
  }
  secondOutput.value = fixed + block; 
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