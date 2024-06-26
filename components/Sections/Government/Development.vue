<template>
  <div class="grid items-center">
    <aside class="flex gap-5 py-5 border-b border-theme-indigo">
      <figure
        class="grid text-sm font-semibold place-content-center w-52 shrink-0 border-e-4 border-theme-indigo"
      >
        <IconsPlayDetalis class="w-20 h-20 mx-auto" />
        <figcaption v-t="'government_development_head1'"></figcaption>
      </figure>

      <article
        class="py-4 text-sm font-semibold"
        v-t="'government_development_p1'"
      ></article>
    </aside>

    <aside class="flex gap-5 py-5 border-b border-theme-indigo">
      <figure
        class="grid text-sm font-semibold place-content-center w-52 shrink-0 border-e-4 border-theme-indigo"
      >
        <IconsObjectSearch class="w-20 h-20 mx-auto" />
        <figcaption v-t="'government_development_head2'"></figcaption>
      </figure>

      <article
        class="flex items-center justify-center w-full gap-5 py-6 text-sm font-semibold"
      >
        <div class="grid w-56 gap-1 text-center place-content-center">
          <IconsDevelopEncouragement class="w-16 h-16 mx-auto" />
          <span>{{ $t("government_development_p2_t1") }}</span>
        </div>

        <div class="grid w-56 gap-1 text-center place-content-center">
          <IconsFactory class="w-16 h-16 mx-auto" />
          <span>{{ $t("government_development_p2_t2") }}</span>
        </div>

        <div class="grid w-56 gap-1 text-center place-content-center">
          <IconsAirplane class="w-16 h-16 mx-auto" />
          <span>{{ $t("government_development_p2_t3") }}</span>
        </div>

        <div class="grid w-56 gap-1 text-center place-content-center">
          <IconsLocations class="w-16 h-16 mx-auto" />
          <span>{{ $t("government_development_p2_t4") }}</span>
        </div>
      </article>
    </aside>

    <aside class="flex gap-5 py-5 border-b border-theme-indigo">
      <figure
        class="grid text-sm font-semibold place-content-center w-52 shrink-0 border-e-4 border-theme-indigo"
      >
        <IconsShopEvent class="w-20 h-20 mx-auto" />
        <figcaption v-t="'government_development_head3'"></figcaption>
      </figure>

      <article
        class="py-4 text-sm font-semibold"
        v-t="'government_development_p3'"
      ></article>
    </aside>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
