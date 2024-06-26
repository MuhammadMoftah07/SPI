<template>
  <div class="pb-20 space-y-16 space-y-reverse">
    <ThemeSingleTab
      class="my-6"
      backButton
      @back="$emit('back')"
      :title="$t('KSA_USA')"
    />

    <section class="grid grid-cols-2 overflow-hidden">
      <img src="/imgs/flags/ksa.jpg" alt="" class="object-cover w-full h-56" />
      <img src="/imgs/flags/usa.jpg" class="w-full h-56" alt="" />
    </section>

    <!-- liquidity -->
    <section class="space-y-8">
      <ThemeTitle
        class="text-xl !font-bold translate-y-5"
        noIcon
        :title="$t('liquidity_ratios')"
      />
      <p class="text-sm text-theme-indigo">{{ $t("usa_liquidity_p") }}</p>
      <div class="chartsContainer">
        <aside>
          <ChartsLine
            v-if="ksaLiquidity"
            :chart-data="ksaLiquidity"
            :chart-options="lineOption"
            footerText="Average - local entities in KSA (benchmark)(b)"
            chartClass="max-h-[280px]"
          />
        </aside>

        <aside>
          <ChartsLine
            v-if="usaLiquidity"
            :chart-data="usaLiquidity"
            :chart-options="lineOption"
            footerText="Average - USA (benchmark) (b)"
            chartClass="max-h-[280px]"
          />
        </aside>
      </div>
      <ThemeLowerIdea>
        <div class="grid gap-3">
          <h5 class="font-bold">{{ $t(`liquidity_ratios`) }}</h5>
          <p>
            {{ $t(`usa_liquidity_idea`) }}
          </p>
        </div>
      </ThemeLowerIdea>
    </section>

    <!-- CCC  -->
    <section class="space-y-8">
      <ThemeTitle
        class="text-xl !font-bold translate-y-5"
        noIcon
        :title="$t('ccc')"
      />
      <p class="text-sm text-theme-indigo">{{ $t("usa_ccc_p") }}</p>
      <div class="chartsContainer">
        <aside>
          <ChartsBar
            v-if="ksaCCC"
            :chart-data="ksaCCC"
            :chart-options="barOptions"
            footerText="Average - local entities in KSA (benchmark)(b)(c)"
          />
        </aside>

        <aside>
          <ChartsBar
            v-if="usaCCC"
            :chart-data="usaCCC"
            :chart-options="barOptions"
            footerText="Average - USA (benchmark) (b)"
          />
        </aside>
      </div>
      <ThemeLowerIdea>
        <div class="grid gap-3">
          <h5 class="font-bold">{{ $t(`ccc`) }}</h5>
          <p v-for="n in 2">
            {{ $t(`usa_ccc_idea${n}`) }}
          </p>
        </div>
      </ThemeLowerIdea>
    </section>

    <!-- Profitability  -->
    <section class="space-y-8">
      <ThemeTitle
        class="text-xl !font-bold translate-y-5"
        noIcon
        :title="$t('profitability_ratios')"
      />
      <p class="text-sm text-theme-indigo">{{ $t("usa_profitability_p") }}</p>
      <div class="chartsContainer">
        <aside>
          <ChartsLine
            v-if="ksaProfitability"
            :chart-data="ksaProfitability"
            :chart-options="lineOption2"
            footerText="Average - local entities in KSA (benchmark)(b)"
            chartClass="max-h-[280px]"
          />
        </aside>

        <aside>
          <ChartsLine
            v-if="usaProfitability"
            :chart-data="usaProfitability"
            :chart-options="lineOption2"
            footerText="Average - USA (benchmark) (b)"
            chartClass="max-h-[280px]"
          />
        </aside>
      </div>
      <ThemeLowerIdea>
        <div class="grid gap-3">
          <h5 class="font-bold">{{ $t(`profitability_ratios`) }}</h5>
          <p v-for="n in 2">
            {{ $t(`usa_profitability_idea${n}`) }}
          </p>
        </div>
      </ThemeLowerIdea>
    </section>

    <!-- ROE -->
    <section class="space-y-8">
      <ThemeTitle
        class="text-xl !font-bold translate-y-5"
        noIcon
        :title="$t('ROE_ROA')"
      />
      <p class="text-sm text-theme-indigo">{{ $t("usa_roe_p") }}</p>
      <div class="chartsContainer">
        <aside>
          <ChartsLine
            v-if="ksaROE"
            :chart-data="ksaROE"
            :chart-options="lineOption2"
            footerText="Average - local entities in KSA (benchmark)(b)"
            chartClass="max-h-[280px]"
          />
        </aside>

        <aside>
          <ChartsLine
            v-if="usaROE"
            :chart-data="usaROE"
            :chart-options="lineOption2"
            footerText="Average - USA (benchmark) (b)"
            chartClass="max-h-[280px]"
          />
        </aside>
      </div>
      <ThemeLowerIdea>
        <div class="grid gap-3">
          <h5 class="font-bold">{{ $t(`ROE_ROA`) }}</h5>
          <p v-for="n in 3">
            {{ $t(`usa_roe_idea${n}`) }}
          </p>
        </div>
      </ThemeLowerIdea>
    </section>

    <!-- Solvency -->
    <section class="space-y-8">
      <ThemeTitle
        class="text-xl !font-bold translate-y-5"
        noIcon
        :title="$t('solvency')"
      />
      <p class="text-sm text-theme-indigo">{{ $t("usa_solvency_p") }}</p>
      <div class="chartsContainer">
        <aside>
          <ChartsLine
            v-if="ksaSolvency"
            :chart-data="ksaSolvency"
            :chart-options="lineOption3"
            footerText="Average - local entities in KSA (benchmark)(b)"
            chartClass="max-h-[280px]"
          />
        </aside>

        <aside>
          <ChartsLine
            v-if="usaSolvency"
            :chart-data="usaSolvency"
            :chart-options="lineOption3"
            footerText="Average - USA (benchmark) (b)"
            chartClass="max-h-[280px]"
          />
        </aside>
      </div>
      <ThemeLowerIdea>
        <div class="grid gap-3">
          <h5 class="font-bold">{{ $t(`solvency`) }}</h5>
          <p v-for="n in 2">
            {{ $t(`usa_solvency_idea${n}`) }}
          </p>
        </div>
      </ThemeLowerIdea>
    </section>
  </div>
</template>

<script setup>
const specificColors = ["#5B9DCD", "#4266B1", "#273D6C"];

const ksaLiquidity = computed(() => {
  const data = useChartsData().liquidity_ratios_ksa;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data[0].points.map((item) => item.label),

    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      borderWidth: 1,
      pointRadius: 7,
      pointStyle: "rect",
      backgroundColor: specificColors[index],
      datalabels: {
        color: specificColors[index],
        anchor: "end",
        align: "end",
        offset: -5,
        font: {
          weight: "bold",
          size: 13.5,
        },
      },
    })),
  };
});

const usaLiquidity = computed(() => {
  const data = useChartsData().average_usa_liquidity_ratios;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data[0].points.map((item) => item.label),

    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      borderWidth: 1,
      pointRadius: 7,
      pointStyle: "rect",
      backgroundColor: specificColors[index],
      datalabels: {
        color: specificColors[index],
        anchor: "end",
        align: "end",
        offset: -5,
        font: {
          // weight: "bold",
          size: 13,
        },
      },
    })),
  };
});

const lineOption = {
  responsive: true,
  color: "black",
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        padding: 10,
        font: {
          size: 11.5,
          weight: "500",
        },
        // usePointStyle: true,
      },
    },
    datalabels: {
      align: "end",
      anchor: "top",
      color: "white",
      textAlign: useI18n.locale == "ar" ? "right" : "left",
      font: {
        weight: "600",
        size: 13,
      },
    },
  },

  scales: {
    y: {
      type: "linear",
      suggestedMax: (v) => {
        const maxNumber = Math.max(
          ...v.chart.data.datasets.map((item) => Math.max(...item.data))
        );
        const percentage = (maxNumber * 15) / 100;
        const final = maxNumber + percentage;
        return final;
      },
      display: false,
      position: "right",
      beginAtZero: true,
      grid: {
        drawOnChartArea: false,
      },
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

const lineOption2 = {
  responsive: true,
  color: "black",
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        padding: 10,
        font: {
          size: 11.5,
          weight: "500",
        },
        // usePointStyle: true,
      },
    },
    datalabels: {
      formatter: (v) => v + "%",
      align: "end",
      anchor: "top",
      color: "white",
      textAlign: useI18n.locale == "ar" ? "right" : "left",
      font: {
        weight: "600",
        size: 13,
      },
    },
  },

  scales: {
    y: {
      suggestedMax: (v) => {
        const maxNumber = Math.max(
          ...v.chart.data.datasets.map((item) => Math.max(...item.data))
        );
        const percentage = (maxNumber * 15) / 100;
        const final = maxNumber + percentage;
        return final;
      },
      display: false,
      position: "right",
      beginAtZero: true,
      grid: {
        drawOnChartArea: false,
      },
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
const lineOption3 = {
  responsive: true,
  color: "black",
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        padding: 10,
        font: {
          size: 11.5,
          weight: "500",
        },
        // usePointStyle: true,
      },
    },
    datalabels: {
      formatter: (v) => v + "x",
      align: "end",
      anchor: "top",
      color: "white",
      textAlign: useI18n.locale == "ar" ? "right" : "left",
      font: {
        weight: "600",
        size: 13,
      },
    },
  },

  scales: {
    y: {
      suggestedMax: (v) => {
        const maxNumber = Math.max(
          ...v.chart.data.datasets.map((item) => Math.max(...item.data))
        );
        const percentage = (maxNumber * 15) / 100;
        const final = maxNumber + percentage;
        return final;
      },
      display: false,
      position: "right",
      beginAtZero: true,
      grid: {
        drawOnChartArea: false,
      },
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

const barOptions = {
  minBarLength: 30,
  responsive: true,
  color: "black",
  plugins: {
    legend: {
      position: "bottom",
      display: true,
      labels: {
        padding: 20,
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
      stacked: true,
      suggestedMax: (v) => {
        const maxNumber = Math.max(
          ...v.chart.data.datasets.map((item) => Math.max(...item.data))
        );
        const percentage = (maxNumber * 15) / 100;
        const final = maxNumber + percentage;
        return final;
      },
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

const barChartColors = ["#5B9DCD", "#4266B1", "#273D6C"];
const ksaCCC = computed(() => {
  const data = useChartsData().cash_conversion_cycle_ksa;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data[0].points.map((el) => el.label),
    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      backgroundColor: barChartColors[index],
      borderWidth: 0,
    })),
  };
});
const usaCCC = computed(() => {
  const data = useChartsData().cash_conversion_cycle_usa;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data[0].points.map((el) => el.label),
    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      backgroundColor: barChartColors[index],
      borderWidth: 0,
    })),
  };
});

const ksaProfitability = computed(() => {
  const data = useChartsData().profitability_ksa;
  if (!data?.length) {
    return null;
  }

  return {
    labels: data[0].points.map((item) => item.label),

    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      borderWidth: 1,
      pointRadius: 7,
      pointStyle: "rect",
      backgroundColor: specificColors[index],
      datalabels: {
        color: specificColors[index],
        anchor: "end",
        align: "end",
        offset: -5,
        font: {
          // weight: "bold",
          size: 13,
        },
      },
    })),
  };
});
const usaProfitability = computed(() => {
  const data = useChartsData().profitability_usa;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data[0].points.map((item) => item.label),

    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      borderWidth: 1,
      pointRadius: 7,
      pointStyle: "rect",
      backgroundColor: specificColors[index],
      datalabels: {
        color: specificColors[index],
        anchor: "end",
        align: "end",
        offset: -5,
        font: {
          // weight: "bold",
          size: 13,
        },
      },
    })),
  };
});

const ksaROE = computed(() => {
  const data = useChartsData().roe_and_roa_ksa;
  if (!data?.length) {
    return null;
  }

  return {
    labels: data[0].points.map((item) => item.label),

    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      borderWidth: 1,
      pointRadius: 7,
      pointStyle: "rect",
      backgroundColor: specificColors[index],
      datalabels: {
        color: specificColors[index],
        anchor: "end",
        align: "end",
        offset: -5,
        font: {
          // weight: "bold",
          size: 13,
        },
      },
    })),
  };
});
const usaROE = computed(() => {
  const data = useChartsData().roe_and_roa_usa;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data[0].points.map((item) => item.label),

    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      borderWidth: 1,
      pointRadius: 7,
      pointStyle: "rect",
      backgroundColor: specificColors[index],
      datalabels: {
        color: specificColors[index],
        anchor: "end",
        align: "end",
        offset: -5,
        font: {
          // weight: "bold",
          size: 13,
        },
      },
    })),
  };
});

const ksaSolvency = computed(() => {
  const data = useChartsData().solvency_ratios_ksa;
  if (!data?.length) {
    return null;
  }

  return {
    labels: data[0].points.map((item) => item.label),

    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      borderWidth: 1,
      pointRadius: 7,
      pointStyle: "rect",
      backgroundColor: specificColors[index],
      datalabels: {
        color: specificColors[index],
        anchor: "end",
        align: "end",
        offset: -5,
        font: {
          // weight: "bold",
          size: 13,
        },
      },
    })),
  };
});
const usaSolvency = computed(() => {
  const data = useChartsData().solvency_ratios_usa;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data[0].points.map((item) => item.label),

    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      borderWidth: 1,
      pointRadius: 7,
      pointStyle: "rect",
      backgroundColor: specificColors[index],
      datalabels: {
        color: specificColors[index],
        anchor: "end",
        align: "end",
        offset: -5,
        font: {
          // weight: "bold",
          size: 13,
        },
      },
    })),
  };
});
</script>

<style scoped>
.chartsContainer {
  @apply grid grid-cols-1 gap-14 xl:grid-cols-2 -translate-y-4;
}
</style>
