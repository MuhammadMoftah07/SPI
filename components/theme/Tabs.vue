<template>
  <section>
    <aside
      class="flex items-center gap-2 px-4 py-2 text-sm text-white bg-theme-celestial-blue rounded-t-2xl w-fit float-end"
    >
      <span> {{ $t("actions") }}</span>

      <span class="w-px h-6 bg-slate-100/70"></span>

      <ul class="flex gap-2">
        <li
          @click="useNuxtApp().$toast.info('Coming Soon ...!')"
          class="action-btn"
        >
          <IconsEmailForward class="w-4 h-4" />
        </li>

        <li
          @click="useNuxtApp().$toast.info('Coming Soon ...!')"
          class="action-btn"
        >
          <IconsExcelFile class="w-4 h-4" />
        </li>

        <li
          @click="useNuxtApp().$toast.info('Coming Soon ...!')"
          class="action-btn"
        >
          <IconsPDFFile class="w-4 h-4" />
        </li>

        <li
          @click="useNuxtApp().$toast.info('Coming Soon ...!')"
          class="action-btn"
        >
          <IconsPowerpointFile class="w-4 h-4" />
        </li>

        <li
          @click="useNuxtApp().$toast.info('Coming Soon ...!')"
          class="action-btn"
        >
          <IconsShareCircle class="w-4 h-4" />
        </li>

        <li
          @click="useNuxtApp().$toast.info('Coming Soon ...!')"
          class="action-btn"
        >
          <IconsPrinter class="w-4 h-4" />
        </li>
      </ul>
    </aside>
    <ul
      class="flex items-center w-full h-12 overflow-hidden capitalize rounded-b-2xl"
    >
      <li
        v-for="el in tabs"
        class="grid w-full h-full text-xs text-center cursor-pointer place-content-center hover:opacity-80"
        :class="
          InnerActiveTab == el
            ? 'bg-theme-indigo text-slate-50 font-medium'
            : 'bg-theme-aqua text-theme-indigo '
        "
        @click="(InnerActiveTab = el), $emit('tabChosen', el)"
      >
        {{ el }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps(["activeTab", "tabs"]);
const InnerActiveTab = ref(props.activeTab);
</script>

<style scoped>
.action-btn {
  @apply bg-transparent cursor-pointer  btn btn-sm hover:bg-white/30 border-none animate-none;
}
</style>
