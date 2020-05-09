<template>
  <div class="card" style="width: 90rem;">

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
        ajaxURL:"http://jsonplaceholder.typicode.com/users",   
        
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
    
  }
};
</script>
