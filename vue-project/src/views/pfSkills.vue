<template>
  <div class="flex flex-col gap-7 justify-center h-full">
    <p class="text-4xl lg:text-6xl">skills</p>
    <hr class="border-1"></hr>
    <div class="overflow-auto no-scrollbar">
      <ul class="flex flex-row flex-wrap">
        <li v-for="skill in skills" :key="skill.name" class="p-1 tooltip tooltip-right tooltip-info" :data-tip="skill.name">
          <img
            :title="skill.name"
            :src="skill.icon"
            :alt="skill.altText"
            width="50"
            loading="lazy"
          /> 
        </li>
      </ul> 
    </div>



  </div>
</template>

<script setup>

const skills = [
  { name: 'JavaScript', icon: '/js.svg', altText: 'JavaScript' },
  { name: 'Vue.js', icon: '/vue.svg', altText: 'Vue.js' },
  { name: 'Python', icon: '/python.svg', altText: 'Python' },
  { name: 'Flask', icon: '/flask.svg', altText: 'Flask' },
  { name: 'HTML', icon: '/html.svg', altText: 'HTML' },
  { name: 'CSS', icon: '/css.svg', altText: 'CSS' },
  { name: 'Bootstrap', icon: '/bootstrap.svg', altText: 'Bootstrap' },
  { name: 'Tailwind', icon: '/tailwind.svg', altText: 'Tailwind' },
  { name: 'Github', icon: '/github.svg', altText: 'Github' },
  { name: 'MySQL', icon: '/mysql.svg', altText: 'MySQL' },
  { name: 'Vercel', icon: '/vercel.svg', altText: 'Vercel' },
]

</script>

<style lang="scss" scoped></style>
