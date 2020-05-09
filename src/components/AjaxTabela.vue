<template>
  <div class="card" style="width: 90rem;">
    <button @click.stop.prevent="getUsers()" class="btn btn-success">
      Buscar
    </button>
    <br /><br />

    <Vue-Tabulator v-model="dados" :options="options" />

    <!-- <ul class="list-group">
          <li class="list-group-item" v-for="user in users">{{user.name}}</li>
        </ul> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dados: [],

      options: {
        data: this.dados,
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
      var url = "http://jsonplaceholder.typicode.com/users";

      var vm = this;
      axios
        .get(url)
        .then(function(response) {
          vm.dados = response.data;
          console.log(vm.users);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
