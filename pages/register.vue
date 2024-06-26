<template>
  <div>
    <AuthContainer>
      <AuthRegister />
    </AuthContainer>
    <aside class="py-7 bg-theme-indigo">
      <div class="flex items-center max-w-6xl gap-5 mx-auto text-slate-50">
        <img src="@/static/logo.png" class="h-5" alt="" />
        <p>{{ $t("footer_p1") }}</p>
        <p class="ms-auto">{{ $t("footer_p2") }}</p>
      </div>
    </aside>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "authentication",
  middleware: "guest",
});
</script>
