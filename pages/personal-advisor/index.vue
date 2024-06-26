<template>
  <section class="mx-auto max-w-7xl">
    <!-- <ThemeTitle no-icon :title="$t('personal_advisor')" /> -->

    <section
      class="mt-5 h-[calc(100vh_-_140px)] bg-slate-200 rounded-lg p-5 border shadow-xl relative overflow-auto"
    >
      <article class="flex flex-col gap-2">
        <template v-for="n in 5">
          <aside class="flex gap-3">
            <img
              src="~/assets/imgs/robot.png"
              class="w-10 h-10"
              alt="robot-advisor"
            />
            <div class="robot-chat">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              voluptate porro eveniet id tempore, ducimus quibusdam delectus
              quisquam nihil sit quia quidem blanditiis repudiandae est sint
              quas corporis laboriosam atque!
            </div>
          </aside>

          <aside class="flex justify-end gap-2">
            <div class="my-chat">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              voluptate porro eveniet id tempore
            </div>
          </aside>
        </template>
      </article>

      <div
        class="sticky bottom-0 left-0 right-0 flex items-center justify-center w-full gap-1 py-1 translate-y-5 bg-slate-200"
      >
        <input
          type="text "
          title="chat-input"
          :placeholder="$t('type_message')"
          class="!font-normal input !outline-none w-screen max-w-3xl"
        />

        <button
          type="button"
          title="send-button"
          class="btn btn-circle btn-sm btn-primary no-animation"
        >
          <IconsSendArrow class="w-4 h-4" />
        </button>
      </div>
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: "authenticated",
  layout: "advisor",
});
</script>

<style scoped>
.robot-chat {
  @apply p-2 text-sm font-medium bg-white rounded-lg text-theme-indigo max-w-[60%];
}
.my-chat {
  @apply p-2 text-sm font-medium bg-white rounded-lg text-theme-indigo max-w-[60%];
}
</style>
