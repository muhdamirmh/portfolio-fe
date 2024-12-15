<template>
  <navBar />
  <main class="fluid-background">
    <section class="section" id="home">
      <div class="hero-content">
        <h1 class="text-5xl font-bold">Welcome to My Portfolio</h1>
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

    <section class="section" id="about">
      <h2 class="text-3xl font-bold mb-4">About Me</h2>
      <p>
        I'm a passionate web developer with a focus on creating beautiful and functional websites. I
        love working with the latest technologies and exploring new design trends.
      </p>
      <p>
        I'm always looking for new opportunities to collaborate with talented individuals and teams.
        Feel free to contact me if you have any questions or project inquiries.
      </p>
    </section>

    <section class="section" id="contact">
      <h2>Contact</h2>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import navBar from '@/components/navBar.vue'

const isExpanded = ref(false)

const links = [
  { to: '/', text: 'HOME', id: 'home' },
  { to: '/#projects', text: 'PROJECTS', id: 'projects' },
  { to: '/#about', text: 'ABOUT', id: 'about' },
  { to: '/#contact', text: 'CONTACT', id: 'contact' },
]

const toggleNav = () => {
  isExpanded.value = !isExpanded.value
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  } else {
    console.error(`Section with ID "${sectionId}" not found.`)
  }
}
</script>

<style scoped>
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
    var(--color-1-3),
    var(--color-1-4),
    var(--color-1-5)
  );

  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
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
  margin: 2rem;
  border: 3px solid var(--color-1-1);
  border-radius: 1rem;
  background-color: rgba(230, 230, 230, 0.3);
}

.section:nth-child(even) {
  padding: 2rem;
  margin: 2rem;
  border: 3px solid var(--color-1-1);
  border-radius: 1rem;
  background-color: rgba(230, 230, 230, 0.15);
}
</style>
