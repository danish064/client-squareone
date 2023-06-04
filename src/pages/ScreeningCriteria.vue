<template>
  <div
    class="max-w-[1440px] mx-auto text-center px-20 py-32 flex flex-col gap-y-5"
  >
    <div class="font-semibold text-[45px] pb-10">Screening Criteria</div>
    <div class="points_wrapper">
      <div class="heading">Application Fee:</div>
      <div class="content">
        The application fee is required for each applicant over the age of 18
        and is non-refundable. By paying the fee, applicants give consent to
        undergo background, rental, and employment checks. Security Deposit:
        Once the application is approved, applicants must provide certified
        funds for the entire security deposit amount and sign an earnest money
        agreement within 48 hours.
      </div>
      <div class="heading">Photo Identification:</div>
      <div class="content">
        All applicants over the age of 18 must provide a valid government-issued
        photo identification at the time of application.
      </div>

      <div class="heading">Employment Requirements:</div>
      <div class="content">
        Applicants should demonstrate a minimum of 6 months of employment with
        their current employer. If an applicant has been employed for less than
        6 months with their current employer, they may still be approved by
        paying an additional security deposit and providing evidence of at least
        2 months of employment with their current employer or 6 months with
        their previous employer. The employment history will be verified by
        contacting the employer(s).
      </div>
      <div class="heading">Income Requirements:</div>
      <div class="content">
        The total combined income of all individuals residing in the rental unit
        must be at least three times the monthly rent. Applicants who do not
        meet the income requirement may still be considered if they provide cash
        reserves equal to or exceeding 12 times the monthly rent.
      </div>
      <div class="heading">Rental History:</div>
      <div class="content">
        Applicants must provide contact information for their two previous
        landlords or all landlords within the past five years. Additionally,
        they must provide addresses of all places they have lived in the past
        five years. Approval will not be granted if applicants have any
        evictions, lease agreement defaults, late rental payments, utilities in
        collections, or outstanding debts to previous landlords.
      </div>
      <div class="heading">Credit History:</div>
      <div class="content">
        Applicants' credit history should demonstrate that all accounts are
        current. Tenancy applications will be denied if the applicant has filed
        for bankruptcy within the last five years or if any bankruptcy has not
        been discharged for at least one year prior to the application. All
        collection amounts must be "paid in full/as agreed." Applicants with
        past due accounts or accounts in collections may qualify by paying an
        additional security deposit.
      </div>
      <div class="heading">Criminal History:</div>
      <div class="content">
        Applicants may face rejection if they have been convicted of a crime
        against a person or property within the last 7 years, which could pose a
        threat to the property owners, neighbors, or the rental property. Felony
        convictions within the last 7 years, crimes against children or violent
        crimes, and felony charges within the last 5 years will result in
        denial. Applicants on probation or parole must provide contact
        information for their parole/probation officer. Applicants listed on
        publicly available offender registries will be denied.
      </div>
      <div class="heading">Maximum Occupancy:</div>
      <div class="content">
        The maximum number of occupants allowed is 2 per bedroom, with an
        additional occupant permitted for each Apartment Home. For example, a
        one-bedroom/studio allows a maximum of 3 occupants, a two-bedroom allows
        5 occupants, a three-bedroom allows 7 occupants, and so on.
      </div>
      <div class="heading">Notification and Deposit:</div>
      <div class="content">
        If your application is approved, you will receive a notification. You
        will have 48 hours from the approval notification to pay the deposit for
        the specified unit. Failure to do so may result in consideration of
        other applicants and their opportunity to place a deposit and sign a
        lease agreement. Square One Property Management is fully committed to
        complying with all federal, state, and local fair housing laws.
        Discrimination based on race, color, religion, national origin, sex,
        familial status, disability, or any other protected classes under
        applicable laws is strictly prohibited. Reasonable accommodations or
        modifications will be provided based on disability-related needs, and
        the individual requesting such accommodations may be responsible for
        related expenses.
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
.points_wrapper {
  @apply flex flex-col text-left;
  .heading {
    @apply text-3xl font-semibold mb-2;
  }
  .content {
    @apply text-lg mb-10;
  }
}
</style>
