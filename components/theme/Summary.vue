<template>
  <section class="space-y-10">
    <article>
      <div class="bg-[#05AB26]">
        <IconsLike class="text-white" />
      </div>
      <p class="">
        {{ greenText ?? "None" }}
      </p>
    </article>

    <article>
      <div class="bg-[#949795]">
        <IconsLike class="text-white -rotate-90" />
      </div>
      <p class="">
        {{ greyText ?? "None" }}
      </p>
    </article>

    <article>
      <div class="bg-[#d02626]">
        <IconsLike class="text-white -scale-y-100" />
      </div>
      <p class="">
        {{ redText ?? "None" }}
      </p>
    </article>

    <div
      class="flex items-center gap-4 text-sm capitalize ps-2 text-theme-indigo"
    >
      <aside class="flex items-center gap-2 font-medium">
        <IconsLike class="text-green-600 w-7 h-7" />
        <p>{{ $t("positive") }}</p>
      </aside>

      <aside class="flex items-center gap-2 font-medium">
        <IconsLike class="-rotate-90 w-7 h-7 text-slate-400" />
        <p>{{ $t("neutral") }}</p>
      </aside>

      <aside class="flex items-center gap-2 font-medium">
        <IconsLike class="text-red-500 w-7 h-7 -scale-y-100" />
        <p>{{ $t("negative") }}</p>
      </aside>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps(["greenText", "greyText", "redText"]);
</script>

<style scoped>
article {
  @apply grid items-center  grid-cols-12 overflow-hidden rounded-xl bg-slate-100 min-h-[100px];
}
article > div {
  @apply h-full place-content-center grid col-span-1;
}
article > p {
  @apply col-span-11 p-3 text-sm 3xl:text-base font-medium 3xl:p-6 text-theme-indigo;
}
article svg {
  @apply w-12 3xl:w-14 stroke-white;
}
</style>
