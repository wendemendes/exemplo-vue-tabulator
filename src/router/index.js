

import Vue from "vue";
import Router from "vue-router";
import PrimeiraTable from "@/components/PrimeiraTable";
import SegundaTabela from "@/components/SegundaTabela";
import TerceiraTabela from "@/components/TerceiraTabela";
import AjaxTabela from "@/components/AjaxTabela";
import AjaxTabela2 from "@/components/AjaxTabela2";
import AjaxTabela3 from "@/components/AjaxTabela3";
import AjaxTabela4 from "@/components/AjaxTabela4";
import ExemploModal from "@/components/ExemploVueBootstrap";
import EditorTexto from "@/components/EditorTexto";
import TabelaItensExemplo from "@/components/notafiscal/notafiscal.index";
import Home from "@/components/Home";
import VueTabulator from 'vue-tabulator';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
// import VueAxios from 'vue-axios'
// import axios from 'axios'

//Vue.use(VueAxios, axios);


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
    { path: '/terceiraTabela', name: 'terceiraTabela', component: TerceiraTabela },
    { path: '/ajaxTabela', name: 'ajaxTabela', component: AjaxTabela },
    { path: '/ajax2Tabela', name: 'ajax2Tabela', component: AjaxTabela2 },
    { path: '/ajax3Tabela', name: 'ajax3Tabela', component: AjaxTabela3 },
    { path: '/ajax4Tabela', name: 'ajax4Tabela', component: AjaxTabela4 },
    { path: '/tabelaItensExemplo', name: 'tabelaItensExemplo', component: TabelaItensExemplo },
    { path: '/exemploVueBootstrap', name: 'exemploVueBootstrap', component: ExemploModal },
    { path: '/editorTexto', name: 'editorTexto', component: EditorTexto }
    
  ]
});
