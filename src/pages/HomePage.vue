<template>
  <div class="max-w-[1200px] mx-auto mb-10 py-10 text-5xl font-medium">
    Let us manage your properties
  </div>
  <div class="max-w-[1200px] mx-auto">
    <div class="text-3xl font-medium mb-10">Why SquareOne?</div>
    <div class="flex gap-x-10 justify-between">
      <div class="w-1/2">
        We are the best
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        doloribus rem omnis rerum repellendus minima iste fuga ipsam quaerat
        necessitatibus dolor, consequuntur exercitationem quod. Cupiditate illum
        cum quibusdam distinctio labore. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatibus, eligendi ipsam quia id dolorum sint
        vitae doloribus ab maxime, voluptas blanditiis similique voluptatum,
        perferendis possimus nostrum ex earum architecto iure.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio et minus,
        dolore ab laborum ea natus tempora id dolores, corporis sint vero
        consequatur maiores iusto iure beatae blanditiis numquam laboriosam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        perferendis reiciendis illum dolorem, sunt, voluptas cupiditate quidem
        impedit doloremque sit corporis? Exercitationem impedit odio dolores,
        consectetur pariatur rem numquam explicabo!
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
  </div>
</template>
<script setup>
import Feature from "@/components/Feature.vue";
const fzooldata =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dignissimos voluptate, necessitatibus dolorum, quisquam quasi magnam aspernatur laborum eaque blanditiis non tempora ipsum ratione quidem odit quis omnis molestias id.";
</script>
<style lang="postcss" scoped></style>
