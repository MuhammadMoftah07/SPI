<template>
  <section class="relative">
    <ThemeLoading v-if="loading" />
    <div id="correlationHeatmap" style="width: 100%; height: 700px"></div>
    <ChartsFooter text="Correlation Heatmap" />
  </section>
</template>

<script lang="ts" setup>
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";
  import am4themes_animated from "@amcharts/amcharts4/themes/animated";
  am4core.useTheme(am4themes_animated);
  const globalSector = computed(() => {
    return useGlobalStore().activeSector;
  });
  const loading = ref(false);

  onMounted(() => {
    initData();
  });

  const initData = () => {
    loading.value = true;
    $fetch(`/correlation/heatmap?sector_id=${globalSector.value}`).then(
      (response) => {
        setTimeout(() => {
          loading.value = false;
        }, 1000);

        chart = am4core.create("correlationHeatmap", am4charts.XYChart);
        chart.data = generateChartData(response.data);
        chart.responsive.enabled = true; // Enable responsiveness

        // Configure categoryAxis to be horizontal (XAxis)
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30; // Adjust for better label spacing
        categoryAxis.renderer.labels.template.rotation = -45; // Rotate labels for better fit
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.fontSize = 13; // Set font size to 13px
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;

        // Enable scrollbar if needed to scroll through categories
        categoryAxis.scrollbarX = new am4core.Scrollbar();

        // Configure valueAxis to be vertical (YAxis)
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Configure series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "value"; // Adjust to valueY for horizontal category axis
        series.dataFields.categoryX = "category"; // Adjust to categoryX for horizontal category axis
        series.columns.template.tooltipText =
          "{category}, {subCategory}: [bold]{value}[/]";
        series.columns.template.fillOpacity = 0.8;
        series.columns.template.strokeWidth = 0;

        // Disable animations explicitly
        series.interpolationDuration = 0;
        series.sequencedInterpolation = false;

        let hoverState = series.columns.template.states.create("hover");
        hoverState.properties.fillOpacity = 0.8;
        hoverState.transitionDuration = 0; // Disable transition animation
      }
    );
  };

  let chart;

  const generateChartData = (data) => {
    const chartData = [];
    data.head.forEach((head, index) => {
      if (!data.cells[index]) {
        return;
      }

      data.cells[index].forEach((value, cellIndex) => {
        chartData.push({
          category: head,
          value,
          subCategory: `Data ${cellIndex + 1}`,
        });
      });
    });
    return chartData;
  };

  onUnmounted(() => {
    if (chart) {
      chart.dispose();
    }
  });
</script>

<style scoped>
  /* #correlationHeatmap {
    width: 100%;
    height: 500px;
  } */
</style>
