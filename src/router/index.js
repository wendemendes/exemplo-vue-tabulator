

import Vue from "vue";
import Router from "vue-router";
import PrimeiraTable from "@/components/PrimeiraTable";
import SegundaTabela from "@/components/SegundaTabela";
import TerceiraTabela from "@/components/TerceiraTabela";

import Home from "@/components/Home";
import VueTabulator from 'vue-tabulator';


Vue.use(Router);
Vue.use(VueTabulator);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    { path: '/primeiraTabela', name: 'primeiraTabela', component: PrimeiraTable },
    { path: '/segundaTabela', name: 'segundaTabela', component: SegundaTabela },
    {path: '/terceiraTabela', name: 'terceiraTabela', component: TerceiraTabela},
  ]
});
