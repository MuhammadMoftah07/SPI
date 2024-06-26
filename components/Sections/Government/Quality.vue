<template>
  <div class="grid">
    <ThemeLowerIdea>
      <div class="grid">
        <h5
          class="text-sm font-semibold"
          v-t="'government_quality_idea_title'"
        ></h5>
        <h5 class="text-xs font-medium" v-t="'government_quality_idea_p'"></h5>
      </div>
    </ThemeLowerIdea>

    <section class="grid items-center my-8 xl:flex">
      <figure
        class="grid h-full w-full mx-auto xl:mx-5 max-w-[250px] gap-4 text-center place-content-center xl:border-e-4 border-theme-indigo"
      >
        <IconsGoals class="w-24 h-24 mx-auto" />
        <p class="mb-2 text-xs font-semibold">
          {{ $t("government_quality_head") }}
        </p>
      </figure>

      <div class="flex flex-wrap w-full grid-cols-3 gap-5 xl:grid">
        <ThemeIconCard2
          v-for="n in 5"
          :key="n"
          :title="$t(`government_quality_title${n}`)"
          :text="$t(`government_quality_p${n}`)"
          text-class="min-h-[150px]"
          :class="n == 5 ? 'lg:col-span-2' : ''"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
