<template>
  <div>
    <section class="relative w-full bg-theme-indigo z-0 h-[637px]" dir="ltr">
      <img
        :placeholder="[1536, 637]"
        src="/imgs/home-cover.png"
        class="absolute top-0 left-0 z-0 object-cover w-full h-full"
        alt="home-cover"
      />
      <!-- left-5 2xl:left-64 lg:left-20  -->
      <article
        class="absolute left-0 right-0 z-10 grid w-full gap-6 mx-auto max-w-7xl top-56"
      >
        <div class="grid gap-4 w-fit" :dir="$t('dir')">
          <p
            class="max-w-lg text-slate-50"
            style="text-shadow: 1px 1px 1px black"
          >
            {{
              activeText == "government"
                ? $t("cover_text_government")
                : $t("cover_text_private")
            }}
          </p>
          <aside class="flex gap-6">
            <button
              @click="activeText = 'government'"
              class="w-40 font-normal capitalize rounded-full h-9 btn hover:bg-theme-indigo hover:text-white"
              :class="
                activeText == 'government'
                  ? 'bg-theme-indigo text-white '
                  : 'bg-theme-aqua text-theme-indigo'
              "
            >
              {{ $t("government") }}
            </button>

            <button
              @click="activeText = 'private'"
              class="w-40 font-normal capitalize rounded-full h-9 btn hover:bg-theme-indigo hover:text-white"
              :class="
                activeText == 'private'
                  ? 'bg-theme-indigo text-white '
                  : 'bg-theme-aqua text-theme-indigo'
              "
            >
              {{ $t("private") }}
            </button>
          </aside>
        </div>
      </article>
    </section>

    <aside
      class="grid max-w-6xl grid-cols-4 gap-8 py-6 mx-auto bg-white/0 grayscale"
    >
      <img
        v-for="n in 4"
        :placeholder="[380]"
        :src="`/imgs/partners/${n}.png`"
        :alt="`partner${n}`"
        loading="lazy"
      />
    </aside>

    <LayoutFooterCopyWrite />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});
const activeText = ref("government");
</script>
