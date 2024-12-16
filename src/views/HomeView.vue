<template>
  <navBar />

  <Transition name="fade">
    <div v-if="showWelcomeScreen" class="welcome-screen">
      <p v-html="typedText" class="text-3xl"></p>
    </div>
  </Transition>

  <main class="fluid-background">
    <section class="section" id="home">
      <div class="hero-content">
        <p class="text-5xl font-bold">karma.dev</p>
        <p class="text-3xl font-bold">Welcome</p>
        <p class="text-lg">A showcase of my creative work.</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get in Touch
        </button>
      </div>
    </section>

    <section class="section" id="projects">
      <h2 class="text-3xl font-bold mb-4">My Projects</h2>
      <div class="project-card">
        <h3>Project 1: Website Design</h3>
        <p>A modern website design for a tech startup.</p>
        <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >View Project</a
        >
      </div>
      <div class="project-card"></div>
    </section>

    <section class="section flex flex-col gap-y-3" id="about">
      <h2 class="text-3xl font-bold">About Me</h2>
      <p>
        I'm a passionate and dedicated web developer always eager to learn and grow. With a focus on
        creating user-friendly and visually appealing websites, I'm constantly exploring the latest
        technologies and design trends.
      </p>
      <p>
        I'm particularly interested in full-stack development. I'm always open to new challenges and
        opportunities.
      </p>

      <div class="flex flex-col gap-y-3">
        <h2>My Tech Stack:</h2>
        <div class="flex flex-wrap gap-x-2">
          <img src="/html.svg" class="rounded-xl p-2 bg-slate-200 w-12" alt="HTML5" />
          <img src="/css.svg" class="rounded-xl p-2 bg-slate-200 w-12" alt="CSS3" />
          <div class="rounded-xl p-2 bg-slate-200 w-12">
            <img src="/js.svg" class="bg-black" alt="JavaScript" />
          </div>

          <img src="/vue.svg" class="rounded-xl p-2 bg-slate-200 w-12" alt="Vue" />
          <img src="/python.svg" class="rounded-xl p-2 bg-slate-200 w-12" alt="Python" />
          <img src="/flask.svg" class="rounded-xl p-2 bg-slate-200 w-12" alt="Flask" />
        </div>
      </div>
    </section>

    <section class="section flex flex-col gap-y-4" id="contact">
      <h2>Contact me here:</h2>

      <div class="flex flex-row gap-x-2">
        <a href="https://github.com/muhdamirmh" target="_blank">
          <img src="/github.svg" alt="GitHub" class="rounded-xl p-2 bg-[#6F2D98] w-12" />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-amir-mohd-hastapuzi/" target="_blank">
          <img src="/linkedin.svg" alt="LinkedIn" class="rounded-xl p-2 bg-[#0B65C2] w-12" />
        </a>
      </div>

      <h2>Or email me down below:</h2>

      <form class="flex flex-col gap-y-2">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button class="rounded-xl w-1/3 flex flex-col place-self-center place-items-center bg-[var(--color-1-1)] text-slate-50 p-2 mt-1" type="submit">Send Message</button>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import navBar from '@/components/navBar.vue'

const showWelcomeScreen = ref(true)
const typedText = ref('')
const fullText = ['karma.dev                 ', 'Welcome.']
const typingInterval = 100

onMounted(() => {
  typeText()
  setTimeout(() => {
    showWelcomeScreen.value = false
  }, 5000)
})

function typeText() {
  let currentParagraphIndex = 0
  let currentCharIndex = 0
  const typingIntervalId = setInterval(() => {
    typedText.value += fullText[currentParagraphIndex][currentCharIndex]

    currentCharIndex++

    if (currentCharIndex >= fullText[currentParagraphIndex].length) {
      setTimeout(() => {}, 1000)

      currentParagraphIndex++
      currentCharIndex = 0

      if (currentParagraphIndex >= fullText.length) {
        clearInterval(typingIntervalId)
        return
      } else {
        typedText.value += '<br><br>'
      }
    }

    setTimeout(typeNextChar, typingInterval)
  }, typingInterval)
}
</script>

<style scoped>
.welcome-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 51;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 4s ease-out;
  opacity: 0;
}

.fluid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: linear-gradient(
    45deg,
    var(--color-1-1),
    var(--color-1-2),
    var(--color-1-3),
    var(--color-1-4),
    var(--color-1-5)
  );

  background-size: 400% 400%;
  animation: gradient 10s ease-in-out infinite;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.fluid-background::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.fluid-background {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.section:nth-child(odd) {
  padding: 2rem;

  background-color: rgba(230, 230, 230, 0.2);
}

.section:nth-child(even) {
  padding: 2rem;

  background-color: rgba(230, 230, 230, 0.1);
}
</style>
