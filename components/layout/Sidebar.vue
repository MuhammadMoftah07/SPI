<template>
  <aside class="w-auto h-screen overflow-x-auto bg-theme-indigo">
    <figure class="grid h-20 place-content-center">
      <img src="@/static/logo.png" class="w-32" alt="" />
    </figure>

    <section class="grid gap-4 px-1 mt-2">
      <label for="" class="grid gap-1">
        <p class="text-sm text-slate-50">
          {{ $t("select_sector") }}
        </p>
        <div class="relative w-full">
          <select
            ref="selectSector"
            name="main_sector"
            @input="refreshData($event)"
            :value="useGlobalStore().activeSector"
            class="w-full input"
          >
            <option :key="el.id" :value="el.id" v-for="el in sectors">
              {{ el.label }}
            </option>
          </select>
          <IconsTriangle
            class="absolute w-3 h-3 transform -translate-y-1/2 text-theme-indigo end-3 top-1/2"
          />
        </div>
      </label>

      <label for="" class="grid gap-1 pointer-events-none opacity-80">
        <!-- <p class="text-sm text-slate-50">{{ $t("select_sector") }}</p> -->
        <p class="text-sm text-slate-50">Select sub sector</p>
        <div class="relative w-full">
          <select name="" class="w-full input" id="">
            <option selected value="">In progress ...</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
          </select>
          <IconsTriangle
            class="absolute w-3 h-3 transform -translate-y-1/2 text-theme-indigo end-3 top-1/2"
          />
        </div>
      </label>
    </section>

    <section
      class="flex flex-col mt-5 overflow-auto divide-y divide-white/20 small_scroll"
    >
      <template v-for="el in sideFilters" :key="el.id">
        <button
          @click="useGlobalStore().activeSideTab.id = el.id"
          :title="el.label"
          class="flex items-center font-light gap-2 text-sm hover:bg-white/10 duration-300 capitalize ms-3 hover:ps-3 min-h-[37px] text-slate-50"
          :class="
            useGlobalStore().activeSideTab.id == el.id ? 'ps-3 bg-white/10' : ''
          "
          v-if="!el.children"
        >
          <Component class="w-4 h-4" :is="el.icon" />
          <span class="w-full truncate text-start"> {{ el.label }}</span>
        </button>

        <ul class="p-0 text-white ms-3 menu" v-if="el.children">
          <li>
            <details
              class="flex items-center font-light gap-2 text-sm duration-300 capitalize hover:ps-3 min-h-[37px] text-slate-50"
            >
              <summary class="ps-0 hover:bg-transparent active:!bg-transparent">
                <Component class="w-4 h-4" :is="el.icon" /> {{ el.label }}
              </summary>
              <ul class="p-0 menu">
                <li
                  @click="useGlobalStore().activeSideTab.id = n.id"
                  v-for="n in el.children"
                  class="hover:ps-3 hover:bg-white/10"
                  :class="
                    useGlobalStore().activeSideTab.id == n.id
                      ? 'ps-3 bg-white/10'
                      : ''
                  "
                >
                  <a class="active:!bg-transparent hover:bg-transparent">
                    {{ n.label }}
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </template>
    </section>
  </aside>
</template>

<script lang="ts" setup>
  //Icons
  import {
    IconsPieChart,
    IconsBarChart,
    IconsMultiUsers,
    IconsDollar,
    IconsStockTicker,
    IconsListCenter,
    IconsAnalysis2,
    IconsGlobal,
    IconsTrade,
    IconsWeather,
    IconsMapMarker,
    IconsCompilance,
    IconsMicrochip,
    IconsGovernmentLine,
  } from "#components";

  const sectors = useSidebarSectors();

  const app = useNuxtApp();
  const t = app.$i18n.t;

  let activeSector = ref("1");
  onBeforeMount(() => {
    // Access localStorage only if window is defined
    const storedValue = localStorage.getItem("activeSector");
    activeSector.value = storedValue || 1;
    useGlobalStore().setSector(activeSector.value);
    getAllCharts();
  });
  // const activeSector = computed(() => {
  //   return localStorage.getItem("activeSector") || 1;
  // });
  const sideFilters = computed(() => {
    return [
      {
        id: 1,
        label: t("market_size"),
        icon: IconsPieChart,
        value: "",
      },
      {
        id: 2,
        label: t("sector_economics"),
        icon: IconsBarChart,
        value: "",
      },
      {
        id: 3,
        label: t("sector_demographic"),
        icon: IconsMultiUsers,
        value: "",
      },
      {
        id: 4,
        label: t("sector_technology"),
        icon: IconsMicrochip,
        value: "",
      },
      {
        id: 5,
        label: t("sector_regulations"),
        icon: IconsCompilance,
        value: "",
      },
      {
        id: 6,
        label: t("government_direction"),
        icon: IconsGovernmentLine,
        value: "",
      },
      {
        id: 7,
        label: t("special_economic_zones"),
        icon: IconsMapMarker,
        value: "",
      },
      // {
      //   id: 8,
      //   label: t("climate_weather"),
      //   icon: IconsWeather,
      //   value: "",
      // },
      {
        id: 9,
        label: t("political_analysis"),
        icon: IconsTrade,
        value: "",
      },
      // {
      //   id: 10,
      //   label: t("global_foreign_investment_trend"),
      //   icon: IconsGlobal,
      //   value: "",
      // },
      {
        id: "financial_analysis",
        label: t("financial_analysis_and_benchmarking"),
        icon: IconsAnalysis2,
        value: "",
      },
      {
        id: "global_indices",
        label: t("global_indices"),
        icon: IconsListCenter,
        value: "",
        children: [
          {
            id: "GII",
            label: "GII",
          },
          {
            id: " GTCI",
            label: " GTCI",
          },
          {
            id: "GCI",
            label: "GCI",
          },
          {
            id: "IP",
            label: "IP",
          },
        ],
      },
      {
        id: "capital_market",
        label: t("capital_market"),
        icon: IconsStockTicker,
        value: "",
      },
      {
        id: "cost_of_business",
        label: t("cost_of_doing_business"),
        icon: IconsDollar,
        value: "",
      },
    ];
  });

  const getAllCharts = () => {
    // market size charts
    useChartsData().getData("market_size_1");
    useChartsData().getData("market_size_type");
    useChartsData().getData("turnover");
    useChartsData().getData("cost_structure");
    useChartsData().getData("profitability");
    useChartsData().getData("no_companies_employees");
    useChartsData().getData("no_employees_avg_salary");
    useChartsData().getData("competitive_landscape");

    //sector economics charts
    useChartsData().getData("real_gdp");
    useChartsData().getData("real_gdp_wholesale");
    useChartsData().getData("annual_inflation_consumer_prices");
    useChartsData().getData("total_household_spending");
    useChartsData().getData("annual_unemployment_rate");

    //Sector Demographic charts
    useChartsData().getData("population_by_age_groups");
    useChartsData().getData("population_by_gender");
    useChartsData().getData("internal_tourism_expenditure");
    useChartsData().getData("internal_tourism_overnight_visitors");
    useChartsData().getData("urban_population");
    useChartsData().getData("gross_personal_income");
    useChartsData().getData("personal_disposable_income");

    //Sector Technology charts
    useChartsData().getData("no_internet_users");
    useChartsData().getData("internet_penetration_rate");
    useChartsData().getData("digital_payment_environment_economic_indicator");
    useChartsData().getData("retail_trade_vending_machines");
    useChartsData().getData("retail_trade_home_shopping");

    //Political Analysis charts
    useChartsData().getData("saudi_arabia_total_imports");
    useChartsData().getData("saudi_arabia_exports_by_country");
    useChartsData().getData("saudi_arabia_total_exports");
    useChartsData().getData("saudi_arabia_exports_by_country_2");

    //Financial Analysis and Benchmarking
    //ksa
    useChartsData().getData("liquidity_ratios_ksa");
    useChartsData().getData("cash_conversion_cycle_ksa");
    useChartsData().getData("profitability_ksa");
    useChartsData().getData("roe_and_roa_ksa");
    useChartsData().getData("solvency_ratios_ksa");

    //germany
    useChartsData().getData("liquidity_ratios_germany");
    useChartsData().getData("cash_conversion_cycle_germany");
    useChartsData().getData("profitability_germany");
    useChartsData().getData("roe_and_roa_germany");
    useChartsData().getData("solvency_ratios_germany");

    //usa
    useChartsData().getData("average_usa_liquidity_ratios");
    useChartsData().getData("cash_conversion_cycle_usa");
    useChartsData().getData("profitability_usa");
    useChartsData().getData("roe_and_roa_usa");
    useChartsData().getData("solvency_ratios_usa");

    //china
    useChartsData().getData("liquidity_ratios_china");
    useChartsData().getData("cash_conversion_cycle_china");
    useChartsData().getData("china_profitability_ratios");
    useChartsData().getData("china_roe_roa");
    useChartsData().getData("china_solvency_ratios");
  };

  const refreshData = async ($event) => {
    await useGlobalStore().setSector($event.target.value);
    getAllCharts();
  };

  //testing
  // setTimeout(() => {}, 1000);
</script>
