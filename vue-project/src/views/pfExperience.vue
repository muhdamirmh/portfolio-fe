<template>
  <div class="flex flex-col gap-7 justify-center h-full">
    <p class="text-4xl lg:text-6xl">experience</p>
    <hr class="border-1"></hr>
    <div class="overflow-auto no-scrollbar flex flex-col lg:grid grid-cols-2 gap-4">
      <div v-for="experience in experiences" :key="experience.id"  class="card card-bordered border-1 bg-transparent w-full ">
        <div class="card-body">
          <h2 id="title" class="card-title">{{ experience.title }}</h2>
          <h3 id="company">{{ experience.company }}</h3>
          <p id="date">{{ experience.date }}</p>
          <p id="description">
            {{  experience.desc }}
          </p>
        </div>
      </div>

    </div>



  </div>
</template>

<script setup>

const experiences = [
  {id: 0, title: 'Internship - Software Engineer', company: 'Secondlifeasia', date: 'March 2024 - June 2024', desc: 'Developed proficiency in programming, specializing in Vue.js and Python (with Flask), while contributing to web development projects. Supported senior developers with frontend and backend tasks.',},
  {id: 1, title: 'Software Engineer', company: 'Secondlifeasia', date: 'June 2024 - Present', desc: 'Promoted to Full-Time Software Engineer following a successful internship. Currently responsible for full-stack web development, encompassing frontend, backend, database design and management, and API development. Contribute to development operations through GitHub administration, secure environment configuration, and access control management.',},
]

</script>

<style lang="scss" scoped></style>
