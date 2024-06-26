<template>
  <section>
    <button
      @click="submit()"
      class="p-2 duration-300 rounded-md bg-slate-600 text-slate-50 active:scale-95"
    >
      Submit
    </button>
    <button class="btn" @click="id = id + 1">Action 1</button>

    <div>
      data => {{ id }}
      <p class="text-xs whitespace-break-spaces"></p>
    </div>
  </section>
</template>

<script setup>
const id = ref(1);

const app = useNuxtApp();
const submit = () => {
  useFetch("/sectors/1/chart?slug=market_size_1", {
    headers: {
      headEXXX: "HEAd4645",
    },
    watch: [id],
  });
};
</script>

<style></style>
