<template>
  <div class="card" style="width: 40rem;">
    <h2 class="card-title">Exemplos tabulator</h2>
    <div class="card-body">
      <div class="list-group">
        <router-link class="btn btn" :to="{ name: 'primeiraTabela' }"
          ><li class="list-group-item list-group-item-dark">
            Table 1
          </li></router-link
        >
        <router-link class="btn btn" :to="{ name: 'segundaTabela' }"
          ><li class="list-group-item list-group-item-light">
            Table 2
          </li></router-link
        >
        <router-link class="btn btn" :to="{ name: 'terceiraTabela' }"
          ><li class="list-group-item list-group-item-dark">
            Table 3
          </li></router-link
        >
        <router-link class="btn btn" :to="{ name: 'ajaxTabela' }"
          ><li class="list-group-item list-group-item-light">
            Exemplo com ajax
          </li></router-link
        >
        <router-link class="btn btn" :to="{ name: 'ajax2Tabela' }"
          ><li class="list-group-item list-group-item-dark">
            Exemplo 2 com ajax
          </li></router-link
        >
        <router-link class="btn btn" :to="{ name: 'ajax3Tabela' }">
          <li class="list-group-item list-group-item-light">
            Exemplo 3 com ajax
          </li></router-link
        >
        <router-link class="btn btn" :to="{ name: 'ajax4Tabela' }"
          ><li class="list-group-item list-group-item-dark">
            Exemplo 4 com ajax
          </li></router-link
        >
        <router-link class="btn btn" :to="{ name: 'tabelaItensExemplo' }"
          ><li class="list-group-item list-group-item-light">
            Exemplo itens nota
          </li></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
var Tabulator = require("tabulator-tables");

export default {
  name: "Test",
  data() {
    return {};
  }
};
</script>
