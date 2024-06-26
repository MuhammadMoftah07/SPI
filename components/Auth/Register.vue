<template>
  <form
    class="grid w-full gap-4 p-5 mx-auto bg-gray-200 shadow-md rounded-3xl"
    @submit.prevent="submitHandler()"
  >
    <h5 class="text-3xl font-medium text-center text-theme-indigo">
      {{ $t("welcome") }}
    </h5>
    <label>
      <input
        type="text"
        class="input2"
        :placeholder="$t('name')"
        v-model="form.name"
        required
      />
    </label>
    <label>
      <input
        type="email"
        class="input2"
        :placeholder="$t('email')"
        v-model="form.email"
        required
      />
    </label>

    <aside class="flex gap-3 text-sm font-medium">
      <span class="shrink-0">{{ $t("are_you") }}</span>
      <div class="grid w-full gap-3">
        <section class="grid gap-2">
          <div
            class="flex items-center cursor-pointer"
            v-for="el in [
              { value: 'private', label: $t('private_sector') },
              { value: 'government', label: $t('government_sector') },
            ]"
          >
            <input
              v-model="form.user_sector_type"
              :id="el.value"
              type="radio"
              :value="el.value"
              name="type"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              :for="el.value"
              class="flex text-sm font-medium text-gray-900 cursor-pointer ms-2"
            >
              {{ el.label }}
            </label>
          </div>
        </section>
        <label>
          <input
            type="text"
            class="input2"
            :placeholder="$t('company')"
            v-model="form.company_name"
          />
        </label>
      </div>
    </aside>

    <label>
      <input
        type="number"
        class="m-0 appearance-none input2"
        :placeholder="$t('phone_number')"
        v-model="form.phone_number"
      />
    </label>

    <label>
      <input
        type="text"
        class="input2"
        :placeholder="$t('national_unified_number')"
        v-model="form.national_unified_number"
      />
    </label>

    <label>
      <input
        type="password"
        id="password"
        class="input2"
        :placeholder="$t('password')"
        v-model="form.password"
      />
    </label>
    <label>
      <input
        type="password"
        id="password2"
        class="input2"
        :placeholder="$t('confirm_password')"
        v-model="form.password2"
      />
    </label>
    <NuxtLink
      :to="localePath('/login')"
      class="text-xs font-medium underline hover:brightness-150 text-theme-indigo"
    >
      <span>{{ $t("already_got") }}</span>
    </NuxtLink>

    <button
      type="submit"
      class="w-full py-3 mx-auto my-4 text-sm font-medium text-white rounded-full btn max-w-52 bg-theme-indigo hover:bg-theme-celestial-blue"
      :disabled="loading"
    >
      <span class="loading loading-spinner" v-if="loading"></span>
      {{ $t("register") }}
    </button>
  </form>
</template>

<script setup>
const t = useI18n().t;
const { signIn, signUp, signOut, data, token, status, getSession } = useAuth();

onMounted(() => {});
const form = ref({});
let loading = ref(false);

const checkErrors = () => {
  if (form.value.password != form.value.password2) {
    useNuxtApp().$toast.error(t("password_not_match"));
    return false;
  }
  return true;
};
const submitHandler = () => {
  if (!checkErrors()) return;
  loading.value = true;
  signUp(
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
