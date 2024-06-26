<template>
  <section class="relative">
    <ThemeLoading v-if="loading" />
    <div id="chartdiv" style="width: 100%; height: 500px"></div>
    <ChartsFooter text="World Heatmap" />
  </section>
</template>

<script lang="ts" setup>
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4maps from "@amcharts/amcharts4/maps";
  import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
  import am4themes_animated from "@amcharts/amcharts4/themes/animated";

  let chart;
  // am4core.useTheme(am4themes_animated);

  const globalSector = computed(() => {
    return useGlobalStore().activeSector;
  });
  const loading = ref(false);

  onMounted(() => {
    initData();
  });
  const exampleData = {
    cells: [
      [
        [55.8, 66.1, 50.7],
        [86.4, 87.5, 85.8],
      ],
    ],
    head: [
      "Political environment",
      "Political stability & safety",
      "Government effectiveness",
    ],
  };
  const initData = () => {
    loading.value = true;
    $fetch(`/countries/heatmap?sector_id=${globalSector.value}`).then(
      (response) => {
        setTimeout(() => {
          loading.value = false;
        }, 1000);

        const gdpData = [];
        response.data.forEach((item) => {
          // gdpData[item.country.code] = item.value;
          gdpData.push({ id: item.country.code, value: item.value });
        });
        // console.log("data ", gdpData);
        chart = am4core.create("chartdiv", am4maps.MapChart);

        chart.seriesContainer.draggable = false;
        chart.seriesContainer.resizable = false;
        chart.maxZoomLevel = 1; // Limits the zoom level to prevent deep zooming
        // Set map definition
        chart.geodata = am4geodata_worldLow;
        chart.geodata.features = chart.geodata.features.filter(
          (feature) => feature.id !== "AQ"
        );
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;

        // Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}: {value}";
        polygonTemplate.nonScalingStroke = true;
        polygonTemplate.strokeWidth = 0.5;

        // Create hover state and set alternative fill color
        // let hs = polygonTemplate.states.create("hover");
        // hs.properties.fill = am4core.color("#273D6C");
        // Disable transition for hover state
        // polygonTemplate.states.transitionDuration = 0;

        // cursor pointer on hover
        polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;

        // Disable zoom controls
        chart.zoomControl = new am4maps.ZoomControl();
        chart.zoomControl.slider.disabled = true;
        chart.zoomControl.plusButton.disabled = true;
        chart.zoomControl.minusButton.disabled = true;

        // Disable mouse wheel zoom
        chart.chartContainer.wheelable = false;
        // Add heat rule
        polygonSeries.heatRules.push({
          property: "fill",
          target: polygonSeries.mapPolygons.template,
          min: am4core.color("#C8EEFF"),
          max: am4core.color("#0071A4"),
        });

        polygonSeries.data = gdpData;

        // Set up heat legend
        let heatLegend = chart.createChild(am4maps.HeatLegend);
        heatLegend.series = polygonSeries;
        heatLegend.align = "right";
        heatLegend.valign = "bottom";
        heatLegend.width = am4core.percent(20);
        heatLegend.marginRight = am4core.percent(4);
        heatLegend.minValue = 0;
        heatLegend.maxValue = 400;

        // Set up custom heat map legend labels
        heatLegend.valueAxis.renderer.labels.template.adapter.add(
          "text",
          function (labelText, target) {
            if (target.dataItem.value == 0) {
              return "";
            }
            return labelText;
          }
        );

        // Configure legend's background
        heatLegend.background.fill = am4core.color("#000");
        heatLegend.background.fillOpacity = 0.05;
      }
    );
  };

  onUnmounted(() => {
    if (chart) {
      chart.dispose();
    }
  });
</script>
