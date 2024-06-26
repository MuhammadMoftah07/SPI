<template>
  <section class="flex justify-center w-full gap-3 h-fit">
    <aside
      class="flex items-center h-auto py-1 overflow-auto text-center small_scroll 3xl:h-14 rounded-b-xl px-7 gap-x-6 gap-y-2 bg-theme-aqua w-fit"
    >
      <NuxtLink :to="localePath('/')" class="link-style">
        <IconsHome />
        <span>{{ $t("home") }}</span>
      </NuxtLink>

      <NuxtLink :to="localePath('/business-analysis')" class="link-style">
        <IconsAnalysis class="!w-28" />
        <span> {{ $t("business_analysis") }}</span>
      </NuxtLink>

      <NuxtLink :to="localePath('/personal-advisor')" class="link-style">
        <IconsGlassess class="!w-6" />
        <span>{{ $t("personal_advisor") }}</span>
      </NuxtLink>

      <NuxtLink :to="localePath('/strategy-management')" class="link-style">
        <IconsStrategy />
        <span>{{ $t("strategy_management") }}</span>
      </NuxtLink>

      <NuxtLink :to="localePath('/project-management')" class="link-style">
        <IconsSurvey />
        <span>{{ $t("project_management") }}</span>
      </NuxtLink>

      <NuxtLink :to="localePath('/specific-company')" class="link-style">
        <IconsFinancial />
        <span>{{ $t("specific_company") }}</span>
      </NuxtLink>

      <!-- <NuxtLink :to="localePath('/investor-survey')" class="link-style">
        <IconsSurvey />
        <span>{{ $t("investor_survey") }}</span>
      </NuxtLink> -->

      <!-- <NuxtLink
        :to="localePath('/testing')"
        class="link-style"
        v-if="useRuntimeConfig().public.envMode == 'dev'"
      >
        <IconsSurvey />
        <span>{{ "Testing" }}</span>
      </NuxtLink> -->
    </aside>

    <aside
      class="flex items-center h-12 py-1 text-center small_scroll 3xl:h-14 rounded-b-xl px-7 gap-x-6 gap-y-2 bg-theme-aqua w-fit"
    >
      <NuxtLink v-if="status == 'unauthenticated'" :to="localePath('/login')">
        <IconsUser class="w-5 h-5 3xl:h-6 3xl:w-6" />
      </NuxtLink>

      <div
        v-if="status == 'authenticated'"
        class="dropdown dropdown-bottom dropdown-end"
      >
        <div tabindex="0" role="button" class="btn-sm btn btn-circle">
          {{ useFirstLetters(data.data.name) }}
        </div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-sm font-medium capitalize"
        >
          <li class="py-2 mb-2 font-semibold border-b">
            {{ getFirstLastName(data.data.name) }}
          </li>
          <li
            @click="
              useNuxtApp().$toast.info('Coming Soon ...!', {
                autoClose: 1500,
              })
            "
          >
            <a>
              <IconsUser class="w-4 h-4 3xl:h-5 3xl:w-5" />
              {{ $t("profile") }}
            </a>
          </li>
          <li @click="signOut({ callbackUrl: useNuxtApp().$localePath('/') })">
            <a class="text-red-500">
              <IconsBackArrow
                class="w-4 h-4 stroke-red-500 3xl:h-5 3xl:w-5 rtl:rotate-180"
              />
              {{ $t("logout") }}
            </a>
          </li>
        </ul>
      </div>

      <button
        type="button"
        @click="useNuxtApp().$toast.info('Coming Soon ...!')"
      >
        <IconsNotifications class="w-5 h-5 3xl:h-6 3xl:w-6" />
      </button>
      <button
        @click="useNuxtApp().$toast.info('Coming Soon ...!')"
        type="button"
      >
        <IconsSearch class="w-5 h-5 3xl:h-6 3xl:w-6" />
      </button>

      <NuxtLink
        :to="
          locale == 'ar'
            ? useSwitchLocalePath()('en')
            : useSwitchLocalePath()('ar')
        "
        class="text-xl text-center"
      >
        <span> {{ locale == "ar" ? "En" : "Ar" }}</span>
      </NuxtLink>
    </aside>
  </section>
</template>

<script setup>
const { status, data, signOut } = useAuth();
// i18n languages
const { locale } = useI18n();
</script>

<style scoped>
.router-link-active {
  @apply !opacity-100;
}

.link-style {
  @apply grid shrink-0 text-xs 3xl:text-sm opacity-60;
}

.link-style svg {
  @apply w-5 h-5 3xl:h-6 3xl:w-6 mx-auto;
}
</style>
