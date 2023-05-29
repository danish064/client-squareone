<template>
  <div class="w-full h-28 text-white bg-primary sticky top-0">
    <div
      class="max-w-[1200px] w-full h-full mx-auto flex justify-between items-center"
    >
      <RouterLink
        to="/"
        id="logo"
        class="text-3xl h-full flex items-center p-2 bg-[#252628] cursor-pointer"
      >
        <!-- Square One -->
        <img class="h-full" src="@/assets/SO-logo.svg" alt="" />
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
