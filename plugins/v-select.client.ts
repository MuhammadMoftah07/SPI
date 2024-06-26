// import '@vueform/multiselect/themes/default.css'
// import 'vue-multiselect/dist/vue-multiselect.min.css'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.component('v-select ', vSelect )
// })

// import Vue from 'vue'
// import vSelect from 'vue-select'

// Vue.component('v-select', vSelect)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-select", vSelect);
});
