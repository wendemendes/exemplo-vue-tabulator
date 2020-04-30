<template>
  <div class="card" style="width: 90rem;">
    <div class="card-body">
      <h1>Vue Tabulator</h1>
      <Vue-Tabulator v-model="dados" :options="options" />

      <br />
      <router-link class="btn btn-secondary" :to="{ name: 'Home' }">
        Voltar
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dados: [
        {
          name: "Joao",
          age: 13
        },
        {
          name: "Mario",
          age: 25
        },
        {
          name: "Ana",
          age: 47
        },
        {
          name: "Ana maria",
          age: 26
        },
        {
          name: "Jose",
          age: 89
        },
        {
          name: "Manuel",
          age: 10
        }
      ],
      options: {
        height: "200px",
        layout: "fitColumns",
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
  }
};
</script>
