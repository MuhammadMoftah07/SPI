<template>
  <div class="grid grid-cols-12 gap-10">
    <section class="col-span-7">
      <ChartsLine
        v-if="chartData"
        :chart-data="chartData"
        :chart-options="chartOption"
        footerText="Annual unemployment rate(a) (%), 2017A-Q3’2022A"
        chartClass="max-h-[380px] -mt-10 mx-auto"
      />
    </section>
    <section class="grid col-span-5 gap-4">
      <aside
        class="grid items-start grid-cols-5 p-4 bg-theme-aqua2 rounded-2xl"
      >
        <div class="grid col-span-1 mt-3 place-content-center">
          <IconsScenario class="w-9 h-9 text-theme-indigo" />
        </div>
        <div class="col-span-4 text-theme-indigo">
          <h2 class="mb-4 text-lg font-semibold capitalize">
            {{ $t("unemployment_past_title") }}
          </h2>
          <ul class="space-y-6 text-sm">
            <li>{{ $t("unemployment_past_1") }}</li>
            <li>{{ $t("unemployment_past_2") }}</li>
            <li>{{ $t("unemployment_past_3") }}</li>
            <li>{{ $t("unemployment_past_4") }}</li>
          </ul>
        </div>
      </aside>

      <aside
        class="grid items-start grid-cols-5 p-4 bg-theme-aqua2 rounded-2xl"
      >
        <div class="grid col-span-1 mt-3 place-content-center">
          <IconsTelescope class="w-9 h-9 text-theme-indigo" />
        </div>
        <div class="col-span-4 text-theme-indigo">
          <h2 class="mb-4 text-lg font-semibold capitalize">
            {{ $t("unemployment_outlook_title") }}
          </h2>
          <ul class="space-y-6 text-sm">
            <li>{{ $t("unemployment_outlook_p") }}</li>
          </ul>
        </div>
      </aside>
    </section>
  </div>
</template>

<script setup>
let chartData = computed(() => {
  const data = useChartsData().annual_unemployment_rate;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        data: data.map((el) => el.point_value),
        borderWidth: 2,
        pointRadius: 8,
        pointStyle: "rect",
        borderColor: "#6B4747",
        backgroundColor: "#6B4747",
        datalabels: {
          color: "black",
          anchor: "end",
          align: "end",
          formatter: (value) => value + "%",
          offset: -2,
          font: {
            weight: "bold",
            size: 14,
          },
        },
      },
    ],
  };
});

const chartOption = {
  responsive: true,
  color: "black",
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      suggestedMax: 11,
      display: false,
      beginAtZero: false,
    },
    x: {
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
