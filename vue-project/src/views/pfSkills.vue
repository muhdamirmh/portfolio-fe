<template>
  <div class="flex flex-col gap-7 justify-center h-full">
    <p class="text-4xl lg:text-6xl">skills</p>
    <hr class="border-1"></hr>
    <div class="overflow-x-hidden no-scrollbar">
      <ul class="flex flex-row flex-wrap">
        <li v-for="skill in skills" :key="skill.name" class="p-1 w-fit tooltip  tooltip-info" :class="getTooltipPosition(skill)"  :data-tip="skill.name">
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


import { ref, onMounted, nextTick } from 'vue';

const skills = ref([
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
])

const skillElements = ref([]);

onMounted(() => {
  nextTick(() => {
    skillElements.value = document.querySelectorAll('.tooltip'); // Select all tooltip elements
  });
});


const getTooltipPosition = (skill) => {
  const index = skills.value.indexOf(skill);

  if (skillElements.value.length === 0) return 'tooltip-right'; // Default to right if elements not rendered

  const skillElement = skillElements.value[index];

  if (!skillElement) return 'tooltip-right'; // Default to right if element not found

  const rect = skillElement.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  console.log(` ${index}: ${rect.right}: ${viewportWidth *1.5}`)

  const isLeft = rect.right > (viewportWidth * 1.5); // Check for left condition

  return isLeft ? 'tooltip-left' : 'tooltip-right'; // Return the correct class
};



</script>

<style lang="scss" scoped></style>
