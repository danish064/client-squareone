<template>
  <div id="feature_wrapper">
    <template v-if="rtl">
      <div id="content">
        <div id="heading">{{ heading }}</div>
        <div id="desc">{{ desc }}</div>
        <div id="shadow_box"></div>
      </div>
      <img :src="icon" alt="" />
    </template>
    <template v-else>
      <img :src="icon" alt="" />
      <div id="content">
        <div id="heading">{{ heading }}</div>
        <div id="desc">{{ desc }}</div>
        <div id="shadow_box"></div>
      </div>
    </template>
  </div>
</template>
<script setup>
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  rtl: {
    type: Boolean,
    required: true,
  },
});
// const image = new URL(`/src/assets/images/${props.icon}.svg`, import.meta.url)
//   .href;
</script>
<style lang="postcss" scoped>
#feature_wrapper {
  /* @apply flex flex-col gap-y-4 items-center ; */
  @apply flex justify-between items-start gap-x-2 px-2 w-1/2;
  /* @apply my-18; */

  @screen lg {
  }

  > #content {
    @apply flex flex-col max-w-[687px] my-0;
    @screen lg {
      /* @apply my-18; */
    }
    > #heading {
      @apply text-4xl text-left font-semibold mb-4;
    }
    > #desc {
      @apply text-lg font-medium font-aneklatin text-left text-primary;
    }
    > #shadow_box {
      @apply w-[100px] h-1 bg-[#1245591A] rounded-full mt-6;
    }
  }
  > img {
    @apply max-h-[350px];
    /* @apply max-w-[388px]; */
  }
}
#feature_wrapper:nth-child(odd) {
  @apply flex-col-reverse;
  @screen lg {
    @apply flex-row;
  }
}
</style>
