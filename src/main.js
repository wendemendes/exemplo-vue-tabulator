
import Vue from 'vue';
import App from './App';
import router from './router';
import VueAxios from 'vue-axios'
import axios from 'axios'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
//import 'tabulator-tables/dist/css/tabulator_simple.min.css'
//import 'tabulator-tables/dist/css/bootstrap/tabulator_bootstrap.min.css'
//import 'tabulator-tables/dist/css/bootstrap/tabulator_bootstrap4.min.css'

import 'tabulator-tables/dist/css/tabulator_site.css'
//import 'tabulator-tables/dist/css/tabulator.css'
//import 'tabulator-tables/dist/css/tabulator_midnight.css'
//import 'tabulator-tables/dist/css/tabulator_modern.css'
//import 'tabulator-tables/dist/css/semantic-ui/tabulator_semantic-ui.css'
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

//<link href="/css/tabulator/tabulator_site.min.css" rel="stylesheet">


//import 'tabulator-tables/dist/css/bootstrap/tabulator_bootstrap4.min.css'



{/* <style lang='scss'>

@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

</style> */}






Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
