<template>
  <form
    class="grid w-full gap-4 p-5 py-12 mx-auto bg-gray-200 shadow-md lg:py-24 rounded-3xl"
    @submit.prevent="submitHandler()"
  >
    <h5 class="text-3xl font-medium text-center text-theme-indigo">
      {{ $t("welcome_to") }}
    </h5>
    <img
      src="@/assets/imgs/black-logo.png"
      class="h-20 mx-auto mt-1 mb-5"
      alt=""
    />

    <label>
      <input
        type="email"
        class="input2"
        :placeholder="$t('email')"
        v-model="form.email"
        required
      />
    </label>

    <label>
      <input
        type="password"
        id="password"
        class="input2"
        :placeholder="$t('password')"
        v-model="form.password"
        required
      />
    </label>

    <NuxtLink
      :to="localePath('/register')"
      class="text-xs font-medium underline hover:brightness-150 text-theme-indigo"
    >
      <span>{{ $t("create_account") }}</span>
    </NuxtLink>

    <NuxtLink
      :to="localePath('/reset-password')"
      class="text-xs font-medium underline hover:brightness-150 text-theme-indigo"
    >
      <span>{{ $t("forgot_password") }}</span>
    </NuxtLink>

    <button
      type="submit"
      class="w-full py-3 mx-auto my-4 text-sm font-medium text-white rounded-full btn max-w-52 bg-theme-indigo hover:bg-theme-celestial-blue"
      :disabled="loading"
    >
      <span class="loading loading-spinner" v-if="loading"></span>
      {{ $t("login") }}
    </button>
  </form>
</template>

<script setup>
const t = useI18n().t;
const { signIn, signUp, signOut, data, token, status, getSession } = useAuth();

const form = ref({});
let loading = ref(false);

const submitHandler = () => {
  loading.value = true;

  signIn(
    { ...form.value },
    { callbackUrl: useNuxtApp().$localePath("/business-analysis") }
  )
    .then(() => {
      loading.value = false;
      useNuxtApp().$toast.success(t("you_signed_in"));
    })
    .catch((err) => {
      loading.value = false;
      useToast().errorHandler(err);
    });
};
</script>

<style></style>
