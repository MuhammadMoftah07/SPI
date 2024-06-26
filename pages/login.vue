<template>
  <div>
    <AuthContainer>
      <AuthLogin />
    </AuthContainer>
    <LayoutFooterCopyWrite />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "authentication",
  middleware: "guest",
});
</script>
