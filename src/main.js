
import Vue from 'vue';
import App from './App';
import router from './router';
//import VueAxios from 'vue-axios'
//import axios from 'axios'
//import jsPDF from 'jspdf'
//import autoTable from 'jspdf-autotable'
//import 'tabulator-tables/dist/css/tabulator_simple.min.css'
//import 'tabulator-tables/dist/css/bootstrap/tabulator_bootstrap.min.css'
//import 'tabulator-tables/dist/css/bootstrap/tabulator_bootstrap4.min.css'

import 'tabulator-tables/dist/css/tabulator_site.css'
//import 'tabulator-tables/dist/css/tabulator.css'
//import 'tabulator-tables/dist/css/tabulator_midnight.css'
//import 'tabulator-tables/dist/css/tabulator_modern.css'
//import 'tabulator-tables/dist/css/semantic-ui/tabulator_semantic-ui.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-select/dist/vue-select.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
 

//import 'bootstrap-vue/dist/bootstrap-vue.css'

//<link href="/css/tabulator/tabulator_site.min.css" rel="stylesheet">


//import 'tabulator-tables/dist/css/bootstrap/tabulator_bootstrap4.min.css'



{/* <style lang='scss'>

@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

</style> */}

import { Editor } from '@toast-ui/vue-editor';
import underscore from 'vue-underscore';
import VueAxios from 'vue-axios'
import axios from 'axios'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import vSelect from 'vue-select'
import SelectBuscaProduto from './components/notafiscal/selectbusca/index.vue';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(underscore);
Vue.component('v-select', vSelect)
Vue.component('SelectBuscaProduto', SelectBuscaProduto)


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
