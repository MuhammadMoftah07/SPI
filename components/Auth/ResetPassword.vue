<template>
  <form
    class="grid w-full gap-4 p-5 py-12 mx-auto bg-gray-200 shadow-md lg:py-24 rounded-3xl"
    @submit.prevent="token ? resetPassword() : submitHandler()"
  >
    <img
      src="@/assets/imgs/black-logo.png"
      class="h-20 mx-auto mt-1 mb-5"
      alt=""
    />

    <template v-if="!token">
      <h5 class="text-2xl font-medium text-center text-theme-indigo">
        {{ $t("forgot_password") }}
      </h5>

      <label>
        <input
          type="email"
          class="input2"
          :placeholder="$t('email')"
          v-model="form.email"
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
        :to="localePath('/login')"
        class="text-xs font-medium underline hover:brightness-150 text-theme-indigo"
      >
        <span>{{ $t("already_got") }}</span>
      </NuxtLink>
    </template>

    <template v-if="token">
      <h5 class="text-2xl font-medium text-center text-theme-indigo">
        {{ $t("reset_password") }}
      </h5>

      <label>
        <input
          type="password"
          id="password"
          class="input2"
          :placeholder="$t('password')"
          v-model="password"
        />
      </label>
      <label>
        <input
          type="password"
          id="password2"
          class="input2"
          :placeholder="$t('confirm_password')"
          v-model="password2"
        />
      </label>
    </template>

    <button
      type="submit"
      class="w-full py-3 mx-auto my-4 text-sm font-medium text-white rounded-full btn max-w-52 bg-theme-indigo hover:bg-theme-celestial-blue"
      :disabled="loading"
    >
      <span class="loading loading-spinner" v-if="loading"></span>
      {{ $t("confirm") }}
    </button>
  </form>
</template>

<script setup>
  const t = useI18n().t;

  const form = ref({ email: "" });
  let token = useRoute().query.token || null;
  let email = useRoute().query.email || null;
  let password = reactive("");
  let password2 = reactive("");

  // let emailToReset = ref(null);
  let loading = ref(false);

  const submitHandler = () => {
    loading.value = true;

    $fetch("/authentication/forgot-password", {
      params: { ...form.value },
      method: "get",
    })
      .then(async (res) => {
        loading.value = false;
        await navigateTo(useNuxtApp().$localePath("/"));
        useNuxtApp().$toast.success(res.status);
      })
      .catch((err) => {
        loading.value = false;
        useToast().errorHandler(err);
      });
  };

  const resetPassword = async () => {
    loading.value = true;
    if (password.value != password2.value) {
      useNuxtApp().$toast.error(t("password_not_match"));
      loading.value = false;
      return;
    }
    $fetch("/authentication/forgot-password", {
      body: { token, password, email },
      method: "post",
    })
      .then(async () => {
        loading.value = false;
        await navigateTo(useNuxtApp().$localePath("/login"));
        useNuxtApp().$toast.success(t("password_reset_done"));
      })
      .catch((err) => {
        loading.value = false;
        useToast().errorHandler(err);
      });
  };
</script>

<style></style>
