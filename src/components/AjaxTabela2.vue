<template>
  <div class="card" style="width: 90rem;">
    <button @click.stop.prevent="getUsers()" class="btn btn-success">
      Buscar
    </button>
    <br /><br />

    <Vue-Tabulator ref="table" v-model="dados" :options="options" />

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dados: [],

      options: {
          
        
        height: "200px",
        layout: "fitColumns",
         placeholder:"Nenhum resultado",
        columns: [
          {
            title: "Name",
            field: "name",
            sorter: "string",
            width: 200,
            editor: true
          },
          {
            title: "Idade",
            field: "age",
            sorter: "string"
          }
        ]
      }
    };
  },
  methods: {
    getUsers() {
  
    const tabulatorInstance = this.$refs.table.getInstance();

    tabulatorInstance.setData("http://jsonplaceholder.typicode.com/users");
    }
  }
};
</script>
