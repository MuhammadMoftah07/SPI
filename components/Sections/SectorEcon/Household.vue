<template>
  <div class="grid grid-cols-1 gap-10 xl:grid-cols-12">
    <section class="col-span-6">
      <ChartsBarCateg
        v-if="chartData"
        :chart-data="chartData"
        :chart-options="chartOption"
        footerText="Total household spending, essential and non-essential (SAR bn), 2020E-26F"
        chartClass="max-h-[380px] mb-5 mx-auto"
      />
    </section>
    <section class="grid col-span-6 gap-4">
      <aside class="flex flex-col gap-2">
        <ThemeIconCard
          :title="$t('household_type_title')"
          :text="$t('household_type_p')"
          :icon="IconsMoney"
          icon-class="w-10 h-10"
        />
        <ChartsFooter text="By subcategories(b) (% share in 2023F)" />
      </aside>

      <aside class="flex flex-col gap-2">
        <div class="flex gap-4">
          <ThemeIconCard
            :title="'23.5%'"
            :text="'Personal, insurance and other spending'"
            :icon="IconsHealthShield"
            class="text-center"
          />
          <ThemeIconCard
            :title="'17.2%'"
            :text="'Housing and utilities'"
            :icon="IconsHouseline"
            class="text-center"
            icon-class="w-6 h-6"
          />
          <ThemeIconCard
            :title="'14.8%'"
            :text="'Food and non-alcoholic drinks'"
            :icon="IconsFood"
            class="text-center"
          />
        </div>

        <ChartsFooter text="By subcategories(b) (% share in 2023F)" />
      </aside>
    </section>
    <ThemeLowerIdea
      class="absolute w-full col-span-12 xl:-bottom-32 -bottom-56"
      :text="$t('household_idea')"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  IconsHealthShield,
  IconsHouseline,
  IconsFood,
  IconsMoney,
} from "#components";

let chartData = computed(() => {
  const data = useChartsData().total_household_spending;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data[0].points.map((el) => el.label),
    datasets: [
      {
        label: "Essential spending",
        data: data[0].points.map((el) => el.point_value),
        backgroundColor: "#273D6C",
      },
      {
        label: "Non essential spending",
        data: data[1].points.map((el) => el.point_value),
        backgroundColor: "#4266b1",
      },
    ],
  };
});

const chartOption = {
  minBarLength: 12,
  responsive: true,
  color: "black",
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        padding: 10,
        font: {
          size: 12,
          weight: "500",
        },
        // usePointStyle: true,
      },
    },
    datalabels: {
      color: "white",
      textAlign: useI18n.locale == "ar" ? "right" : "left",

      labels: {
        title: {
          font: {
            weight: "600",
            size: 11,
          },
        },
      },
    },
  },
  scales: {
    y: {
      type: "linear",
      stacked: true,
      // suggestedMax: 100,
      display: false,
      beginAtZero: true,
    },
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "black",
        font: {
          weight: "bold",
          size: 13,
        },
      },
    },
  },
};
</script>

<style scoped></style>
