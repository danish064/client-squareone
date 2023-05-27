<template>
  <div class="w-full h-20 text-white bg-primary">
    <div
      class="max-w-[1200px] w-full h-full mx-auto flex justify-between items-center"
    >
      <RouterLink
        to="/"
        id="logo"
        class="text-3xl h-full flex items-center px-5 bg-[#252628] cursor-pointer"
      >
        Square One
      </RouterLink>
      <RouterLink
        to="/contact"
        class="hover:bg-[#252628] h-full flex items-center px-5 cursor-pointer"
      >
        Contact Us
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style lang="postcss" scoped></style>
