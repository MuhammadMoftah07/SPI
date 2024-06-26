<template>
  <div class="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-12">
    <section
      class="grid items-start grid-cols-1 col-span-12 gap-8 lg:col-span-7 gap-y-16 xl:grid-cols-3"
    >
      <ThemeIconCard2
        :title="$t('regulations_consumer_head1')"
        :text="$t('regulations_consumer_p1')"
        :icon="IconsLanguage"
        textClass="min-h-[150px]"
      />

      <ThemeIconCard2
        :title="$t('regulations_consumer_head2')"
        :text="$t('regulations_consumer_p2')"
        :icon="IconsPath240"
        textClass="min-h-[150px]"
      />

      <ThemeIconCard2
        :title="$t('regulations_consumer_head2')"
        :text="$t('regulations_consumer_p3')"
        :icon="IconsPath240"
        textClass="min-h-[150px]"
      />

      <ThemeIconCard2
        :title="$t('regulations_consumer_head3')"
        :text="$t('regulations_consumer_p4')"
        :icon="IconsCompilance"
        iconClass="!h-10 !w-10 text-theme-indigo"
        textClass="min-h-[150px]"
      />

      <ThemeIconCard2
        :title="$t('regulations_consumer_head4')"
        :text="$t('regulations_consumer_p5')"
        :icon="IconsLandline2"
        textClass="min-h-[150px]"
      />

      <ChartsFooter
        class="xl:col-span-3 -mt-9"
        :text="$t('regulations_consumer_lower_p')"
      />
    </section>

    <section class="col-span-12 lg:col-span-5">
      <ThemeIconCard2
        :title="$t('regulations_consumer_head5')"
        :text="$t('regulations_consumer_p1')"
        textClass="min-h-[150px]"
      >
        <aside class="flex items-center gap-1" v-for="n in 5">
          <IconsIdeaLight class="w-8 h-8 mx-3 shrink-0" />
          <div class="grid my-4">
            <span
              class="text-sm font-semibold text-theme-indigo"
              v-t="`regulations_consumer_scope_title${n}`"
            ></span>
            <p class="text-xs" v-t="`regulations_consumer_scope_p${n}`"></p>
          </div>
        </aside>
      </ThemeIconCard2>
    </section>
  </div>
</template>

<script lang="ts" setup>
import {
  IconsLanguage,
  IconsPath240,
  IconsCompilance,
  IconsLandline2,
  IconsIdeaLight,
} from "#components";
</script>

<style scoped></style>
