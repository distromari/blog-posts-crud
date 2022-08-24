import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import DataTable from "@andresouzaabreu/vue-data-table";
import Vuelidate from 'vuelidate'
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/style.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueToast);
Vue.component("data-table", DataTable);

new Vue({
  router,
  DataTable,
  render: h => h(App),
}).$mount('#app')