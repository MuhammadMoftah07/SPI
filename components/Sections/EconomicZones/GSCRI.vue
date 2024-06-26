<template>
  <div class="grid items-center">
    <ThemeLowerIdea class="mb-3">
      <div class="grid">
        <h5 class="text-sm font-semibold" v-t="'main_purpose'"></h5>
        <h5 class="text-sm font-medium" v-t="'economic_zones_tap_2_idea'"></h5>
      </div>
    </ThemeLowerIdea>

    <aside class="flex gap-5 py-5 border-b border-theme-indigo">
      <figure
        class="grid text-sm font-semibold place-content-center w-52 shrink-0 border-e-4 border-theme-indigo"
      >
        <IconsPlayDetalis class="w-20 h-20 mx-auto" />
        <figcaption v-t="'economic_zones_tap2_head1'"></figcaption>
      </figure>

      <article class="py-4 text-sm">
        <p
          v-for="n in 7"
          class="my-1 font-semibold"
          :class="n > 3 ? 'ps-6' : ''"
        >
          {{ $t(`economic_zones_tap2_article1_${n}`) }}
        </p>
      </article>
    </aside>

    <aside class="flex gap-5 py-5">
      <figure
        class="grid text-sm font-semibold place-content-center w-52 shrink-0 border-e-4 border-theme-indigo"
      >
        <IconsPlayDetalis class="w-20 h-20 mx-auto" />
        <figcaption v-t="'economic_zones_tap2_head2'"></figcaption>
      </figure>

      <article
        class="flex items-start justify-center w-full gap-10 py-6 text-sm font-semibold"
      >
        <div class="grid w-56 gap-1 text-center place-content-center">
          <IconsMoneyFlow class="w-16 h-16 mx-auto" />
          <h5 class="text-2xl font-bold text-theme-indigo">
            {{ $t("economic_zones_tap2_article2_t1") }}
          </h5>
          <span class="text-sm">{{
            $t("economic_zones_tap2_article2_p1")
          }}</span>
        </div>

        <div class="grid w-56 gap-1 text-center place-content-center">
          <IconsMoneyFlow class="w-16 h-16 mx-auto" />
          <h5 class="text-2xl font-bold text-theme-indigo">
            {{ $t("economic_zones_tap2_article2_t2") }}
          </h5>
          <span class="text-sm">{{
            $t("economic_zones_tap2_article2_p2")
          }}</span>
        </div>

        <div class="grid w-56 gap-1 text-center place-content-center">
          <Icons3Humans class="w-16 h-16 mx-auto" />
          <h5 class="text-2xl font-bold text-theme-indigo">
            {{ $t("economic_zones_tap2_article2_t3") }}
          </h5>
          <span class="text-sm">{{
            $t("economic_zones_tap2_article2_p3")
          }}</span>
        </div>
      </article>
    </aside>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
