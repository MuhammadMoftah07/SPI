<template>
  <div>
    <section class="relative w-full bg-theme-indigo z-0 h-[637px]">
      <img
        src="/imgs/home-cover.png"
        class="absolute top-0 left-0 z-0 object-cover w-full h-full"
        alt="home-cover"
      />
      <article
        class="absolute z-10 grid max-w-lg gap-6 left-5 2xl:left-64 lg:left-20 top-56"
      >
        <p class="text-slate-50" style="text-shadow: 1px 1px 1px black">
          {{ $t("home_cover_text") }}
        </p>
        <aside class="flex gap-6">
          <button
            class="w-40 font-normal text-white capitalize rounded-full hover:bg-theme-celestial-blue h-9 btn bg-theme-indigo"
          >
            {{ $t("government") }}
          </button>

          <button
            class="w-40 font-normal text-white capitalize rounded-full hover:bg-theme-celestial-blue h-9 btn bg-theme-indigo"
          >
            {{ $t("private") }}
          </button>
        </aside>
      </article>
    </section>

    <aside class="grid max-w-5xl grid-cols-4 gap-8 mx-auto bg-white/0">
      <img
        v-for="n in 4"
        :src="`/imgs/partners/${n}.png`"
        class=""
        :alt="`partner${n}`"
      />
    </aside>

    <aside class="h-44 bg-theme-indigo"></aside>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});
</script>
