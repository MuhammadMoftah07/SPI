// import { set } from "nuxt/dist/app/compat/capi";

export const useChartsData = defineStore("useChartsData", {
  state: () => {
    return reactive({
      loading: false,
      market_size_1: [],
      market_size_type: [],
      turnover: [],
      cost_structure: [],
      profitability: [],
      real_gdp: [],
      real_gdp_wholesale: [],
      no_internet_users: [],
      internet_penetration_rate: [],
      saudi_arabia_total_imports: [],
      saudi_arabia_exports_by_country: [],
    });
  },

  actions: {
    async getData(slug) {
      this.loading = slug;
      const { data } = await $fetch(
        `/sectors/${useGlobalStore().activeSector}/chart?slug=${slug}`,
        { key: slug }
      ).catch((err) => {
        console.log(err);
      });
      // console.log(slug, data);
      this[slug] = data;
      // this[slug] = data.value.data;
      setTimeout(() => {
        this.loading = false;
      }, 600);
      return { data };
    },
    
    // async getData(slug) {
    //   this.loading = slug;
    //   const { data, pending, error, refresh } = await useFetch(
    //     `/sectors/${useGlobalStore().activeSector}/chart?slug=${slug}`,
    //     { key: slug }
    //   ).catch((err) => {
    //     console.log(err);
    //   });
    //   // console.log(slug, data);
    //   this[slug] = data.value.data;
    //   setTimeout(() => {
    //     this.loading = false;
    //   }, 600);
    //   return { data, pending, error, refresh };
    // },

    
  },
});
