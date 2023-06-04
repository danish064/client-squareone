<template>
  <div class="max-w-[1440px] mx-auto mt-32">
    <div class="mb-10 text-4xl font-medium text-center">
      What services we provide?
    </div>

    <div class="flex mb-10">
      <Feature
        rtl="true"
        heading="Property Managment"
        :desc="propertyManagementData"
        icon="peace_of_mind"
      />
      <Feature heading="Mantinance" :desc="mantinanceData" icon="maintence" />
    </div>
    <div class="flex mb-10">
      <Feature
        heading="Ownership protection"
        :desc="ownershipProtectionData"
        icon="property_protection"
      />
      <Feature
        rtl="true"
        heading="Key Accounts"
        :desc="keyAccountsData"
        icon="key"
      />
    </div>
    <div class="flex mb-10">
      <Feature
        rtl="true"
        heading="Reports"
        :desc="reportsData"
        icon="reports"
      />
      <Feature
        heading="Record Keeping"
        :desc="recordKeepingData"
        icon="record_saving"
      />
    </div>
    <div class="flex mb-10">
      <Feature
        heading="Peace of Mind"
        :desc="peaceOfMindData"
        icon="peace_of_mind"
      />
      <Feature
        rtl="true"
        heading="Premier New Immigrant Experience"
        :desc="newImmigrantData"
        icon="premier_new_immigrant"
      />
    </div>

    <!-- <ContactForm /> -->
  </div>
</template>
<script setup>
import Feature from "@/components/Feature.vue";
import ContactForm from "@/components/ContactForm.vue";
const propertyManagementData =
  "Our comprehensive property management services encompass a wide range of responsibilities.With our expertise and attention to detail, you can trust us to handle these essential property management tasks like Rent Collections, Tenant Relations, Ejari Registrations, Security Deposit, Annual Inspections and Move-in & Move-out Inspections efficiently and effectively, providing you with a seamless and hassle-free experience.";
const ownershipProtectionData =
  "We prioritize the protection of your property and safeguarding your ownership rights. Our dedicated team takes proactive measures to ensure that your property remains secure and free from any attempts of damage or unauthorized occupation. We implement robust security protocols, conduct regular inspections, and promptly address any concerns to mitigate risks effectively. Rest assured that we are committed to preserving the integrity of your property and ensuring that your ownership rights are fully protected throughout our management tenure.";
const mantinanceData =
  "Our comprehensive property maintenance services cover all aspects of tenant and contractor management. We ensure diligent record-keeping of your property and coordinate our maintenance teams to provide accurate quotations. Based on the estimated costs, we offer guidance to both landlords and tenants regarding the required payment for repairs. For minor expenses, tenants are responsible for rectifying the issues before their tenancy ends. However, for more significant expenses, we provide landlords with a quote for their approval. Rest assured, we handle all property maintenance matters efficiently and effectively.";
const keyAccountsData =
  "Consider us your dedicated representative on the ground. Every managed property includes a key account manager who will serve as your point of contact and handle all aspects of tenant and property management, from A to Z. They will be responsible for ensuring the well-being of both the tenant and your asset throughout the year. The account manager will maintain open lines of communication with you, keeping you informed and involved in the process. Rest assured that your tenant and property will receive the utmost care and attention under the watchful guidance of our dedicated account manager.";
const reportsData =
  "During your tenure with us, we will provide you with regular condition reports to keep you informed about the current state of your property. These reports will offer a comprehensive overview of the property's condition, ensuring that you have a clear understanding of its upkeep and any necessary maintenance or repairs. With these reports in hand, you can stay updated and make informed decisions regarding the management and maintenance of your property.";
const recordKeepingData =
  "We handle all essential documentation and administrative tasks related to your property, ensuring a seamless experience for you. This includes managing service requests that take place in your home, maintaining thorough inspection reports, and keeping accurate financial records. We diligently handle tasks such as organizing bank statements and slips, ensuring that all financial transactions are properly documented and accounted for. You can trust us to take care of these crucial administrative responsibilities, providing you with peace of mind and a hassle-free property management experience.";
const peaceOfMindData =
  "We understand that real estate investors seek a hassle-free and profitable experience when it comes to managing their properties. That's why we provide stress-free property management services tailored to meet the needs of our clients. Our team is committed to delivering the best-in-class and personalized services, ensuring that you can enjoy the benefits of your investment without the burden of day-to-day management and maintenance tasks. We offer these services at a reasonable and competitive fee, providing you with peace of mind and a smooth, efficient property management experience.";
const newImmigrantData =
  "We specialize in providing comprehensive services for new immigrants traveling to Canada, ensuring a comfortable and seamless transition. Our package includes premium accommodation in luxury hotels, ensuring a luxurious and comfortable stay upon your arrival. Additionally, we arrange for convenient transportation, providing you with a dedicated chauffeur and a high-quality vehicle to cater to your transportation needs.";
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
