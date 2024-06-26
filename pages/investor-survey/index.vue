<template>
  <section>{{ $route.name }} Page</section>
</template>

<script setup>
definePageMeta({
  middleware: "authenticated",
});
</script>
