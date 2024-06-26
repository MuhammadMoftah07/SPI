<template>
  <main>
    <ThemeTitle title="Title Component" class="mb-10" />
    <ThemeTabs
      class="my-6"
      :tabs="['tab 1', 'tab 2', 'tab 3']"
      activeTab="tab 2"
      @tabChosen="(e) => console.log(e)"
    />
    <Testing />

    <section class="my-5">
      <ThemeTitle :title="'user data =>'" />
      <pre class="text-sm font-medium">{{ data.data }}</pre>
    </section>
  </main>
</template>

<script setup>
const { data } = useAuth();
</script>
