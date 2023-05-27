<template>
  <!-- bg-[#252628] -->
  <div
    id="contact_us"
    class="flex flex-col justify-center items-center w-full p-10"
  >
    <div class="text-center text-slate-500">Have a query?</div>
    <div class="text-center text-4xl font-medium mb-5">Contact US</div>

    <div id="form" class="w-[480px] max-w-[1200px]">
      <form
        action=""
        class="bg-[#252628] p-10 rounded-lg flex flex-col justify-center items-start w-full h-full gap-y-4"
      >
        <div class="input_label">Name</div>
        <input type="text" />
        <div class="input_label">Email</div>
        <input type="text" />
        <div class="input_label">Query</div>
        <input type="text" />

        <input type="submit" />
      </form>
    </div>
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
.input_label {
  @apply text-white text-lg text-left;
}
input[type="text"] {
  @apply w-full h-12 rounded-lg bg-[#252628] focus:bg-slate-500 outline-none border-2 border-white text-white px-5;
  @apply mb-2;
}
input[type="submit"] {
    @apply w-full h-12 rounded-lg bg-[#252628] hover:bg-slate-500 outline-none border-2 border-white text-white px-5;
  @apply mt-4;
}
</style>
