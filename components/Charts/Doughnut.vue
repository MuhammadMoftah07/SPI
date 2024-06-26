<template>
  <section class="grid">
    <Doughnut
      ref="DoughnutChart"
      :class="chartClass"
      :options="chartOptions"
      :data="chartData"
    />
    <ChartsFooter :text="footerText" />
  </section>
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
// Register the components
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  ChartDataLabels
);

const props = defineProps([
  "chartData",
  "chartOptions",
  "footerText",
  "chartClass",
]);
</script>
