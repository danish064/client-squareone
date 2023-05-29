<template>
  <!-- <div class="max-w-[1200px] mx-auto mb-10 py-10 text-5xl font-medium">
    Let us manage your properties
  </div> -->

  <div id="hero">
    <!-- Welcome to -->
    <div class="text-[70px] font-medium">SquareOne</div>
    <div class="pb-10">Your Premier Property Dealing Company</div>
  </div>

  <div class="max-w-[1200px] mx-auto py-10">
    <div class="flex gap-x-10 justify-between">
      <div class="w-1/2">
        <div class="text-3xl font-medium mb-10">Why SquareOne?</div>
        We pride ourselves on being the best in the business of real estate. As
        a premier property dealing company, we excel in guiding clients through
        buying, selling, and investing. Our team offers personalized solutions,
        comprehensive services, and an extensive network of professionals. With
        a commitment to transparency and delivering exceptional customer
        satisfaction, choose SquareOne for an unparalleled property journey.
        Welcome to SquareOne, where excellence is our standard.
      </div>
      <img src="https://placehold.co/400x300" alt="" />
    </div>
  </div>
  <div class="max-w-[1200px] mx-auto mt-32">
    <div class="mb-10 text-4xl font-medium text-center">
      What services we provide?
    </div>

    <div class="flex mb-10">
      <Feature
        rtl="true"
        heading="Service 1"
        :desc="fzooldata"
        icon="https://placehold.co/200x200"
      />
      <Feature
        heading="Service 2"
        :desc="fzooldata"
        icon="https://placehold.co/200x200"
      />
    </div>
    <div class="flex mb-10">
      <Feature
        heading="Service 3"
        :desc="fzooldata"
        icon="https://placehold.co/200x200"
      />
      <Feature
        rtl="true"
        heading="Service 4"
        :desc="fzooldata"
        icon="https://placehold.co/200x200"
      />
    </div>
    <div class="flex mb-10">
      <Feature
        rtl="true"
        heading="Service 5"
        :desc="fzooldata"
        icon="https://placehold.co/200x200"
      />
      <Feature
        heading="Service 6"
        :desc="fzooldata"
        icon="https://placehold.co/200x200"
      />
    </div>

    <ContactForm />
  </div>
</template>
<script setup>
import Feature from "@/components/Feature.vue";
import ContactForm from "@/components/ContactForm.vue";

const fzooldata =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dignissimos voluptate, necessitatibus dolorum, quisquam quasi magnam aspernatur laborum eaque blanditiis non tempora ipsum ratione quidem odit quis omnis molestias id.";
</script>
<style lang="postcss" scoped>
#hero {
  @apply flex flex-col justify-center;
  @apply text-center;
  @apply min-h-[500px] mx-auto;
  @apply bg-black text-white;
}
</style>
