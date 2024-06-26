<template>
  <section
    class="bg-[url('assets/imgs/pieces-blue-stationery.jpg')] pt-10 min-h-[calc(100vh-72px)] bg-cover !bg-black grid place-content-center"
  >
    <section class="flex gap-16">
      <aside
        class="lg:grid max-w-[280px] text-center place-content-center hidden"
      >
        <img
          src="~/assets/imgs/white-logo.png"
          class="w-full mx-auto rounded-lg"
          alt="logo"
        />
        <p class="text-sm text-white">
          {{ $t("register_message") }}
        </p>
      </aside>

      <div class="!w-96">
        <slot />
      </div>
    </section>
  </section>
</template>
