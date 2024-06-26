<template>
  <section class="grid">
    <Line
      ref="LineChart"
      :class="chartClass"
      :data="chartData"
      :options="chartOptions"
    />

    <ChartsFooter v-if="footerText" :text="footerText" />
  </section>
</template>

<script setup>
  import { Line } from "vue-chartjs";
  import ChartDataLabels from "chartjs-plugin-datalabels";
  import { Chart, registerables } from "chart.js";

  Chart.register(...registerables, ChartDataLabels);

  defineProps(["footerText", "chartClass", "chartData", "chartOptions"]);
</script>
