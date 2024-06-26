<template>
  <div class="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-12">
    <section
      class="grid items-start grid-cols-1 col-span-12 gap-4 lg:col-span-7 gap-y-16 xl:grid-cols-3"
    >
      <ThemeIconCard2
        :title="$t('regulations_import_title1')"
        :text="$t('regulations_import_p1')"
        :icon="IconsCheck"
        textClass="min-h-[150px] xl:min-h-[240px]"
        iconClass="w-12 h-12"
      />

      <ThemeIconCard2
        :title="$t('regulations_import_title2')"
        :text="$t('regulations_import_p2')"
        :icon="IconsBan"
        textClass="min-h-[150px] xl:min-h-[240px]"
      />

      <ThemeIconCard2
        :title="$t('regulations_import_title3')"
        :text="$t('regulations_import_p3')"
        :icon="IconsLabel"
        textClass="min-h-[150px] xl:min-h-[240px]"
      />

      <ChartsFooter
        class="-mt-14 xl:col-span-3"
        :text="$t('regulations_import_lower_p')"
      />
    </section>

    <section class="col-span-12 lg:col-span-5">
      <ThemeIconCard2
        :title="$t('regulations_import_title4')"
        textClass="min-h-[150px] xl:min-h-[240px]"
      >
        <aside class="flex items-center gap-1" v-for="n in 2">
          <IconsIdeaLight class="w-8 h-8 mx-3 shrink-0" />
          <div class="grid my-4">
            <p class="text-xs" v-t="`regulations_import_p${n + 3}`"></p>
          </div>
        </aside>
      </ThemeIconCard2>
    </section>
  </div>
</template>

<script setup>
import { IconsCheck, IconsBan, IconsLabel } from "#components";
</script>

<style scoped></style>
