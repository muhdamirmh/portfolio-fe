<template>
  <navBar />

  <Transition name="fade">
    <div v-if="showWelcomeScreen" class="welcome-screen">
      <p v-html="typedText" class="text-3xl"></p>
    </div>
  </Transition>

  <main class="fluid-background">
    <section class="section" id="home">
      <div class="flex flex-col align-content-center">
        <p class="text-5xl font-bold">karma.dev</p>

        <p class="text-lg">A showcase of my work.</p>
      </div>
    </section>

    <div class="section" id="projects">
      <p class="text-3xl pb-8">Projects</p>
      <div class="carousel w-full">
        <div
          v-for="project in projectsContent"
          class="carousel-item flex flex-col border rounded-box w-40 mx-2 p-3 gap-y-2"
        >
          <p class="text-2xl">{{ project.title }}</p>
          <p class="text-md">{{ project.desc }}</p>
          <img class="p-2 w-52 place-self-center" :src="project.imgsrc" />
          <a :href="project.href" class="border rounded-xl p-2 m-3 place-self-center text-center"
            >View Project</a
          >
        </div>
      </div>
    </div>

    <section class="section flex flex-col gap-y-3" id="about">
      <p class="text-3xl">About</p>
      <p>I'm a passionate and dedicated web developer always eager to learn and grow.</p>
      <p>With a focus on creating user-friendly and visually appealing websites,</p>
      <p>I'm constantly exploring the latest technologies and design trends.</p>
      <p>I'm particularly interested in full-stack development.</p>
      <p>I'm always open to new challenges and opportunities.</p>

      <div class="flex flex-col gap-y-3">
        <h2>My Tech Stack:</h2>
        <div class="flex flex-wrap gap-2">
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
      <p class="text-3xl">Contact</p>

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

        <button
          class="rounded-xl w-1/3 flex flex-col place-self-center place-items-center bg-[var(--color-1-1)] text-slate-50 p-2 py-3 mt-3"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import navBar from '@/components/navBar.vue'

const showWelcomeScreen = ref(true)
const typedText = ref('')
const fullText = ['karma.dev                 ', 'Welcome.']
const typingInterval = 100
const scrollInterval = ref(null)
const projectsSection = ref(null)
const projectsContent = [
  {
    title: 'This Portfolio Website',
    desc: 'Showcasing my journey in being a developer',
    imgsrc: '/vue.svg',
    href: '/',
  },
  {
    title: 'This Portfolio Website',
    desc: 'Showcasing my journey in being a developer',
    imgsrc: '/vue.svg',
    href: '/',
  },
  {
    title: 'This Portfolio Website',
    desc: 'Showcasing my journey in being a developer',
    imgsrc: '/vue.svg',
    href: '/',
  },
]

onMounted(() => {
  typeText()

  setTimeout(() => {
    showWelcomeScreen.value = false
    //projectAutoScroll()
  }, 5000)
})

onUnmounted(() => {
  clearInterval(scrollInterval)
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
  }, typingInterval)
}

function projectAutoScroll() {
  let scrollValue = 0.7
  let scrollSpeed = scrollValue

  const scroll = async () => {
    if (projectsSection.value) {
      console.log('yes')
      projectsSection.value.scrollLeft += scrollSpeed

      // Check if we've reached the end and reset the scroll position
      if (
        projectsSection.value.scrollLeft >=
        projectsSection.value.scrollWidth - projectsSection.value.clientWidth
      ) {
        scrollSpeed = -scrollSpeed
      } else if (projectsSection.value.scrollLeft == 0 && scrollSpeed == -scrollValue) {
        scrollSpeed = -scrollSpeed
      }
    }
  }

  scrollInterval.value = setInterval(scroll, 30)
}

function projectAutoScroll2() {
  const scrollSpeed = 0.5

  const scroll = async () => {
    if (projectsSection.value) {
      projectsSection.value.scrollLeft += scrollSpeed

      // Check if we've reached the end and reset the scroll position
      if (
        projectsSection.value.scrollLeft >=
        projectsSection.value.scrollWidth - projectsSection.value.clientWidth
      ) {
        const scrollers = document.querySelectorAll('.project-card2')
        console.log(scrollers)

        // If a user hasn't opted in for recuded motion, then we add the animation
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          addAnimation()
        }

        function addAnimation() {
          scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute('data-animated', true)
            console.log(scroller)

            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelectorAll('.scroller__inner')
            console.log(scrollerInner)

            console.log('/////////////////////')

            scrollerInner.forEach((scrollinner) => {
              const duplicatedItem = scrollinner.cloneNode(true)
              duplicatedItem.setAttribute('aria-hidden', true)
              scroller.appendChild(duplicatedItem)
              scrollinner.setAttribute('aria-hidden', true)
            })

            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`

            /* scrollerContent.forEach((item) => {
              const duplicatedItem = item.cloneNode(true)
              duplicatedItem.setAttribute('aria-hidden', true)
              scrollerInner.appendChild(duplicatedItem)
            }) */
          })
        }
      }
    }
  }

  scrollInterval.value = setInterval(scroll, 30)
}

function projectAutoScroll3() {
  const container = document.getElementById('projectContent')
  const scrollSpeed = 0.5 // Speed of scrolling
  let translateX = 0 // Tracks the current position

  function scrollProducts() {
    projectsSection.value.scrollLeft += scrollSpeed

    // Reset translateX silently when it exceeds the width of one product
    const firstProduct = container.firstElementChild

    const productWidth = firstProduct.offsetWidth + 80 // Width + margin-right

    if (
      projectsSection.value.scrollLeft >=
      projectsSection.value.scrollWidth - projectsSection.value.clientWidth
    ) {
      translateX += productWidth

      container.appendChild(firstProduct) // Move first product to the end
    }

    // Apply smooth scrolling using transform
    container.style.transform = `translateX(${translateX}px)`

    requestAnimationFrame(scrollProducts)
  }

  scrollProducts()
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

.project-section::-webkit-scrollbar {
  display: none;
}

.project-section {
  -ms-overflow-style: none;
  scrollbar-width: none;
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

.project-card {
  flex: 0 0 auto; /* Prevent cards from resizing */
  width: 50vw; /* Adjust card width as needed */
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.scroller__inner {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.scroller[data-animated='true'] {
  overflow: hidden;
  -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated='true'] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear
    infinite;
}

.scroller[data-direction='right'] {
  --_animation-direction: reverse;
}

.scroller[data-direction='left'] {
  --_animation-direction: forwards;
}

.scroller[data-speed='fast'] {
  --_animation-duration: 20s;
}

.scroller[data-speed='slow'] {
  --_animation-duration: 60s;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
</style>
