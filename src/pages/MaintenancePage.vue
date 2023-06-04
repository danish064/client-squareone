<template>
  <div
    class="max-w-[1440px] mx-auto text-center px-20 py-32 flex flex-col gap-y-5"
  >
    <div class="text-3xl font-medium">
      If you are experiencing an maintenance emergency please do not use the
      on-line maintenance request form, call us immediately at (208) 703-9304.
    </div>
    <div class="text-xl">
      Call 911 if there is a fire or other life threatening emergency.
    </div>
    <div class="px-10">
      Emergencies are issues that pose an immediate threat to persons and/or
      property. Some examples are as follows: Water Leaks, Fire, Fire/Security
      Alarms, Flood, No Electricity, Roof Leaks, Gas Leaks.
    </div>
    <div>
      For non-emergency maintenance requests please use the Maintenance Request
      form.
      <br />
      You may submit a maintenance request
      <RouterLink class="text-cyan-700 hover:text-cyan-500 font-medium" to="/contact">here</RouterLink>.
    </div>
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
#hero {
  @apply flex flex-col justify-center;
  @apply text-center;
  @apply min-h-[500px] mx-auto;
  @apply bg-black text-white;
}
li {
  @apply mb-5;
}
.content {
  @apply ml-5;
}
</style>
