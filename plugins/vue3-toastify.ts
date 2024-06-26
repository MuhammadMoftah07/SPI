import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const rtlValue = computed(() => {
  return useNuxtApp().$i18n.t("dir") == "rtl" ? true : false;
});
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    //options ...
    autoClose: 2500,
    theme: "colored",
    rtl: rtlValue,
    closeButton: false,
    pauseOnHover: true,
  });

  return {
    provide: { toast },
  };
});
