<template>
  <section class="grid">
    <Bar
      ref="BarChart"
      :class="chartClass"
      :data="chartData"
      :options="chartOptions"
    />

    <ChartsFooter :text="footerText" />
  </section>
</template>

<script setup>
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

// import {
//   Chart,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
// } from "chart.js";

import { Chart, registerables } from "chart.js";

Chart.register(...registerables, ChartDataLabels);
// Chart.register(
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   ChartDataLabels,
//   PointElement,
//   LineElement
// );

defineProps(["footerText", "chartClass", "chartData", "chartOptions"]);

// const chartData =

// const chartOptions =
</script>
