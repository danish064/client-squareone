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
      <div class="w-1/2 mt-18 flex flex-col items-center gap-y-10">
        <img src="@/assets/images/img1.jpg" class="w-[80%]" alt="" />
        <img src="@/assets/images/img2.jpg" class="w-[80%]" alt="" />
        <img src="@/assets/images/img3.jpg" class="w-[80%]" alt="" />
      </div>
    </div>
  </div>
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

    <ContactForm />
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
