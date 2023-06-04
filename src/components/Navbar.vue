<template>
  <div class="w-full h-28 text-white bg-[#252628] sticky top-0">
    <div
      class="max-w-[1440px] w-full h-full mx-auto flex justify-between items-center"
    >
      <RouterLink
        to="/"
        id="logo"
        class="text-3xl h-full flex items-center p-2 bg-[#252628] cursor-pointer"
      >
        <!-- Square One -->
        <img class="h-full" src="@/assets/SO-logo.svg" alt="" />
      </RouterLink>
      <div class="flex gap-x-4">
        <RouterLink
          to="/"
          class="bg-yellow-600 text-lg rounded-full border border-white hover:bg-yellow-700 hover:border-none h-[70px] w-[150px] flex justify-center items-center cursor-pointer"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/services"
          class="bg-yellow-600 text-lg rounded-full border border-white hover:bg-yellow-700 hover:border-none h-[70px] w-[150px] flex justify-center items-center cursor-pointer"
        >
          Services
        </RouterLink>
        <RouterLink
          to="/maintenance"
          class="bg-yellow-600 text-lg rounded-full border border-white hover:bg-yellow-700 hover:border-none h-[70px] w-[150px] flex justify-center items-center cursor-pointer"
        >
          Maintenance
        </RouterLink>
        <RouterLink
          to="/screening-criteria"
          class="bg-yellow-600 text-lg rounded-full border border-white hover:bg-yellow-700 hover:border-none h-[70px] w-[150px] flex justify-center items-center cursor-pointer"
        >
        Screening Criteria
        </RouterLink>
        <RouterLink
          to="/contact"
          class="bg-yellow-600 text-lg rounded-full border border-white hover:bg-yellow-700 hover:border-none h-[70px] w-[150px] flex justify-center items-center cursor-pointer"
        >
          Contact Us
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style lang="postcss" scoped></style>
