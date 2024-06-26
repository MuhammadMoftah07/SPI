<template>
  <div class="grid grid-cols-1 gap-8 mt-16 gap-y-16 xl:grid-cols-12">
    <section
      class="grid items-start grid-cols-1 col-span-12 gap-4 lg:col-span-9 gap-y-8 xl:grid-cols-3"
    >
      <ThemeIconCard2
        :title="$t('regulations_franchise_head1')"
        :text="$t('regulations_franchise_p1')"
        :icon="IconsRegistration"
        textClass="min-h-[150px] xl:min-h-[240px]"
      />

      <ThemeIconCard2
        :title="$t('regulations_franchise_head2')"
        :text="$t('regulations_franchise_p2')"
        :icon="IconsCompilance"
        textClass="min-h-[150px] xl:min-h-[240px]"
        iconClass="text-theme-indigo"
      />

      <ThemeIconCard2
        :title="$t('regulations_franchise_head3')"
        :text="$t('regulations_franchise_p3')"
        :icon="IconsPermission"
        textClass="min-h-[150px] xl:min-h-[240px]"
      />

      <ChartsFooter
        class="-mt-14 xl:col-span-3"
        :text="$t('regulations_franchise_lower_p1')"
      />
    </section>

    <section class="grid col-span-12 xl:col-span-3 gap-y-8">
      <ThemeIconCard2
        :title="$t('regulations_franchise_head4')"
        :text="$t('regulations_franchise_p4')"
        :icon="IconsLawHammer"
        textClass="min-h-[150px] xl:min-h-[240px]"
        titleClass="!bg-theme-celestial-blue"
      />

      <ChartsFooter
        class="-mt-14 xl:col-span-3"
        :text="$t('regulations_franchise_lower_p2')"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import {
  IconsCompilance,
  IconsLawHammer,
  IconsPermission,
  IconsRegistration,
} from "#components";
</script>

<style scoped></style>
