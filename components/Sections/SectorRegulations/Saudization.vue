<template>
  <section
    class="grid items-start grid-cols-1 gap-4 mt-16 lg:col-span-9 gap-y-8 xl:grid-cols-4"
  >
    <div class="grid grid-cols-1 col-span-2 gap-8 lg:grid-cols-2 gap-y-4">
      <section class="grid col-span-2 lg:col-span-1 gap-y-2">
        <article class="grid gap-8 border-b-8 border-theme-celestial-blue">
          <IconsApplicationX class="w-20 h-20 mx-auto" />
          <p class="min-h-[130px] text-sm font-medium">
            {{ $t("regulations_saudization_p1") }}
          </p>
        </article>
      </section>

      <section class="grid col-span-2 lg:col-span-1 gap-y-2">
        <article class="grid gap-8 border-b-8 border-theme-celestial-blue">
          <IconsEconomyPercentage class="w-20 h-20 mx-auto" />
          <p class="min-h-[130px] text-sm font-medium">
            {{ $t("regulations_saudization_p2") }}
          </p>
        </article>
      </section>

      <ChartsFooter
        class="col-span-2"
        :text="$t('regulations_saudization_lower_p1')"
      />
    </div>

    <section class="grid col-span-2 lg:col-span-1 gap-y-4">
      <article class="grid gap-8 border-b-8 border-theme-aqua">
        <IconsWorker class="w-20 h-20 mx-auto" />
        <p class="min-h-[130px] text-sm font-medium">
          {{ $t("regulations_saudization_p3") }}
        </p>
      </article>
      <ChartsFooter
        class="col-span-2 bg-theme-aqua"
        :text="$t('regulations_saudization_lower_p2')"
      />
    </section>

    <section class="grid gap-y-4">
      <article class="grid gap-8 border-b-8 border-[#A9A6AD]">
        <IconsEmployeeID class="w-20 h-20 mx-auto" />
        <p class="min-h-[130px] text-sm font-medium">
          {{ $t("regulations_saudization_p4") }}
        </p>
      </article>
      <ChartsFooter
        class="col-span-2 bg-[#A9A6AD]"
        :text="$t('regulations_saudization_lower_p3')"
      />
    </section>
  </section>
</template>

<script setup></script>

<style scoped></style>
