<template>
  <div class="flex flex-col gap-7 justify-center h-full">
    <p class="text-4xl lg:text-6xl">contact</p>
    <hr class="border-1"></hr>
    <ul>
      <li class="flex flex-row">
        <img
          src="/right-arrow.svg"
          alt="Right Arrow"
          width="40"
          loading="lazy"
        /> 
        <p>
          Email:
        </p>
        <a :href="`mailto:${email}`" class="underline px-2">
          {{ email }}
        </a>
      </li>
    </ul> 


  </div>
</template>

<script setup>

const email = 'muhd.amir.m.h@gmail.com'

</script>

<style lang="scss" scoped></style>
