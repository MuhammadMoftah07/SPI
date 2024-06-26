<template>
  <div>
    <ThemeLowerIdea class="mb-10">
      <div class="grid">
        <h5 class="text-sm font-semibold" v-t="'main_purpose'"></h5>
        <h5 class="text-sm font-medium" v-t="'economic_zones_tap_1_idea'"></h5>
      </div>
    </ThemeLowerIdea>
    <section
      class="grid items-start grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5 gap-7 gap-y-16 my-9"
    >
      <aside v-for="n in 5" :key="n" class="grid max-w-xs gap-3 mx-auto">
        <img
          class="h-24"
          :title="'sez' + n"
          :src="`/imgs/economic_zones/sez${n}.png`"
        />
        <h5
          class="flex items-center justify-center h-8 text-sm font-bold text-center text-theme-indigo"
          v-t="`economic_zones_tap_1_title${n}`"
        ></h5>
        <p class="text-sm font-semibold" v-t="`economic_zones_tap_1_p${n}`"></p>
      </aside>
      <ChartsFooter
        class="col-span-full"
        :text="$t('economic_zones_tap_1_lower_p')"
      />
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.img-style {
  @apply w-full max-w-sm;
}
</style>
