<template>
  <section class="grid">
    <Bar
      v-if="chartData"
      ref="BarChart"
      :class="chartClass"
      :options="chartOptions"
      :data="chartData"
    />
    <ChartsFooter :my-class="footerClass" :text="footerText" />
  </section>
</template>

<script setup>
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const props = defineProps({
  footerText: {},
  chartClass: {},
  chartData: {},
  chartOptions: {},
  footerClass: {},
});
</script>
