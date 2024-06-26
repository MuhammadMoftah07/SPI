<template>
  <div class="grid gap-8 mt-24 xl:grid-cols-4">
    <ThemeIconCard2
      :title="$t('regulations_investments_title1')"
      :icon="IconsMoneyBag"
    >
      <div
        class="grid p-3 text-sm content-start font-medium border-b-8 gap-6 border-theme-aqua min-h-[250px]"
      >
        <p v-t="`regulations_investments_p1`"></p>
        <p v-t="`regulations_investments_p2`"></p>
      </div>
    </ThemeIconCard2>

    <ThemeIconCard2
      :title="$t('regulations_investments_title2')"
      text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
    explicabo. Tenetur enim ducimus officia fugiat, officiis ad nihil? Quidem
    excepturi voluptate officiis."
      :icon="IconsMoneyInvestment"
    >
      <div
        class="grid p-3 text-sm content-start font-medium border-b-8 gap-6 border-theme-aqua min-h-[250px]"
      >
        <p v-t="`regulations_investments_p3`"></p>
        <p v-t="`regulations_investments_p4`"></p>
      </div>
    </ThemeIconCard2>

    <ThemeIconCard2
      :title="$t('regulations_investments_title3')"
      :text="$t('regulations_investments_p5')"
      :icon="IconsMeeting"
      textClass=" min-h-[250px]"
    />

    <ThemeIconCard2
      :title="$t('regulations_investments_title4')"
      :text="$t('regulations_investments_p6')"
      :icon="IconsGlobal"
      iconClass="!h-10 !w-10"
      textClass=" min-h-[250px]"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  IconsMoneyBag,
  IconsMoneyInvestment,
  IconsMeeting,
  IconsGlobal,
} from "#components";
</script>

<style scoped></style>
