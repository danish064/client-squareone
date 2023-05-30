<template>
  <div id="hero">
    <div class="flex justify-center">
      <img class="mr-5" src="@/assets/SO-logo.svg" width="150" alt="" />
      <div class="flex flex-col justify-center items-start">
        <div class="text-[70px] font-medium">SquareOne</div>
        <div class="pb-5">
          &nbsp;&nbsp;Your Premier Property Dealing Company
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-[1440px] mx-auto pt-20">
    <div class="flex gap-x-10 justify-between">
      <div class="w-1/2">
        <div class="text-3xl font-medium mb-10">Why SquareOne?</div>
        SquareOne is the ideal choice for property owners seeking reliable,
        professional, and tailored property management services. With our
        experience, comprehensive services, tenant satisfaction focus,
        transparency, customized solutions, and proactive approach, we are
        dedicated to maximizing the value of your property investment. Trust
        SquareOne to take care of your property management needs and experience
        the peace of mind that comes with partnering with an industry leader.
        <ul>
          <li class="">
            <div class="font-bold">Experience and Expertise:</div>
            <div class="content">
              With years of experience in the industry, SquareOne has developed
              a deep understanding of property management practices. Our team
              consists of highly skilled professionals who have extensive
              knowledge in various aspects of property management, including
              tenant screening, lease agreements, maintenance, and financial
              management. We leverage our expertise to provide the highest level
              of service and ensure the success of your property investments.
            </div>
          </li>
          <li>
            <div class="font-bold">Comprehensive Services:</div>
            <div class="content">
              SquareOne offers a comprehensive range of property management
              services that cover all aspects of property ownership. From
              marketing and tenant acquisition to rent collection, property
              maintenance, and legal compliance, we take care of every detail
              involved in managing your property. Our aim is to alleviate the
              stress and workload associated with property ownership while
              maximizing your returns.
            </div>
          </li>
          <li>
            <div class="font-bold">Tenant Satisfaction:</div>
            <div class="content">
              At SquareOne, we prioritize tenant satisfaction as it directly
              contributes to the success of your property investment. We have
              implemented a rigorous tenant screening process to ensure that we
              attract responsible and reliable tenants. We maintain open lines
              of communication, promptly address maintenance requests, and
              strive to create a positive living experience for tenants. By
              focusing on tenant satisfaction, we enhance tenant retention and
              minimize vacancies, ultimately maximizing your rental income.
            </div>
          </li>
          <li>
            <div class="font-bold">Transparency and Accountability:</div>
            <div class="content">
              As the owner of SquareOne, I believe in the importance of
              transparency and accountability in our operations. We provide
              regular financial reports, ensuring that you are aware of the
              financial performance of your property. Additionally, we maintain
              clear and open communication channels, keeping you informed about
              any important developments or decisions regarding your property.
              Our commitment to transparency and accountability sets us apart
              and establishes trust with our clients.
            </div>
          </li>
          <li>
            <div class="font-bold">Customized Solutions:</div>
            <div class="content">
              We understand that every property is unique, and each property
              owner has specific goals and requirements. At SquareOne, we tailor
              our services to meet your individual needs. Whether you own a
              single-family home, a multi-unit building, or a commercial
              property, we work closely with you to develop a customized
              property management strategy that aligns with your objectives. Our
              personalized approach ensures that your property receives the
              attention and care it deserves.
            </div>
          </li>
          <li>
            <div class="font-bold">Proactive Approach:</div>
            <div class="content">
              SquareOne takes a proactive approach to property management. We
              conduct regular property inspections to identify and address
              maintenance issues before they become major problems. We also stay
              updated with market trends and adjust rental rates accordingly,
              ensuring that your property remains competitive in the market. Our
              proactive approach helps protect your investment and optimize your
              rental income.
            </div>
          </li>
        </ul>
      </div>
      <img src="@/assets/images/buildings.jpg" width="450" alt="" />
    </div>
  </div>
  <div class="max-w-[1440px] mx-auto mt-32">
    <div class="mb-10 text-4xl font-medium text-center">
      What services we provide?
    </div>

    <div class="flex mb-10">
      <Feature
        rtl="true"
        heading="Rent Out"
        :desc="fzooldata"
        icon="https://placehold.co/200x200"
      />
      <Feature
        heading="Mantinance"
        :desc="fzooldata"
        icon="https://placehold.co/200x200"
      />
    </div>
    <div class="flex mb-10">
      <Feature
      heading="Ownership protection"
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
li {
  @apply mb-5;
}
.content {
  @apply ml-5;
}
</style>
