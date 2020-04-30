<template>
  <div class="card" style="width: 40rem;">
    <h2 class="card-title">Exemplos tabulator</h2>
    <div class="card-body">
      <div class="list-group">


        <router-link class="btn btn-secondary" :to="{name: 'primeiraTabela'}"> Table 1</router-link>       
        <router-link class="btn btn-success" :to="{name: 'segundaTabela'}"> Table 2</router-link>
        <router-link class="btn btn-danger" :to="{name: 'terceiraTabela'}"> Table 3</router-link>
    
        <button type="button" class="list-group-item list-group-item-action">
          Table 4
        </button>
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
