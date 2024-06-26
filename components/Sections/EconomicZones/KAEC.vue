<template>
  <div class="flex flex-col mt-8 xl:flex-row">
    <IconsZonesMap1 class="m-10" />

    <section class="grid w-full lg:grid-cols-2 gap-7">
      <ThemeIconCard2 :title="$t('area')" text-class="border-none">
        <div class="grid">
          <h5 class="mt-3 mb-2 text-sm font-bold text-theme-indigo">
            {{ $t("economic_zones_tap3_block1_title") }}
          </h5>
          <p class="text-sm font-medium">
            {{ $t("economic_zones_tap3_block1_p") }}
          </p>
        </div>
      </ThemeIconCard2>

      <ThemeIconCard2 :title="$t('advantage')" text-class="border-none">
        <p class="my-2 text-sm font-medium" v-for="n in 5">
          {{ $t(`economic_zones_tap3_block2_p${n}`) }}
        </p>
      </ThemeIconCard2>

      <ThemeIconCard2 :title="$t('focus_sectors')" text-class="border-none">
        <p class="my-2 text-sm font-medium" v-for="n in 3">
          {{ $t(`economic_zones_tap3_block3_p${n}`) }}
        </p>
      </ThemeIconCard2>

      <ThemeIconCard2
        :title="$t('notes')"
        titleClass="!bg-theme-celestial-blue"
        text-class="border-none"
      >
        <p class="my-2 text-sm font-medium" v-for="n in 2">
          {{ $t(`economic_zones_tap3_block4_p${n}`) }}
        </p>
      </ThemeIconCard2>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
