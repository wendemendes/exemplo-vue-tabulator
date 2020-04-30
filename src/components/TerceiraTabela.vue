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
          name: "Maria",
          progress: 90,
          age: 13,
          rating: 2,
          car: false,
          gender: "fermale",
          col: "vermelho",
          dob: "01/05/2020"
        },
        {
          name: "Fernando",
          progress: 56,
          age: 40,
          rating: 2,
          car: true,
          gender: "fermale",
          col: "azul",
          dob: "01/05/2020"
        },
        {
          name: "Joao",
          progress: 10,
          age: 13,
          rating: 4,
          car: false,
          gender: "fermale",
          col: "verde",
          dob: "20/03/2019"
        }
      ],
      options: {
        height: "200px",
        layout: "fitColumns",
        columnVertAlign: "bottom", //align header contents to bottom of cell
        columns: [
          { title: "Name", field: "name", width: 160 },
          {
            //create column group
            title: "Work Info",
            columns: [
              {
                title: "Progress",
                field: "progress",
                align: "right",
                sorter: "number",
                formatter:"progress",
                width: 100
              },
              { title: "Rating", field: "rating", align: "center", formatter:"star"},
              { title: "Driver", field: "car", align: "center", formatter:"tickCross", width: 80 }
            ]
          },
          {
            //create column group
            title: "Personal Info",
            columns: [
              { title: "Gender", field: "gender", width: 90 },
              { title: "Favourite Color", field: "col", width: 140 },
              {
                title: "Date Of Birth",
                field: "dob",
                align: "center",
                sorter: "date",
               
              }
            ]
          }
        ]
      }
    };
  }
};
</script>
