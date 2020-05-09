<template>


  <div class="card" style="width: 90rem;">
    <div class="card-body">
      <div id="table"></div>

      <br/>
      <router-link class="btn btn-secondary" :to="{ name: 'Home' }"> Voltar </router-link>

             
    </div>
  </div>
</template>

<script>
var Tabulator = require("tabulator-tables");

export default {
  name: "Test",
  data() {
    return {
      tabulator: null,
      tableData: [
        { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "12/08/2017" },
        { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
        {
          id: 3,
          name: "Christine Lobowski",
          age: "42",
          col: "green",
          dob: "22/05/1982"
        },
        {
          id: 4,
          name: "Brendon Philips",
          age: "125",
          col: "orange",
          dob: "01/08/1980"
        },
        {
          id: 5,
          name: "Margret Marmajuke",
          age: "16",
          col: "yellow",
          dob: "31/01/1999"
        }
      ]
    };
  },
  watch: {
    tableData: {
      handler(newData) {
        this.tabulator.replaceData(newData);
      },
      deep: true
    }
  },
  created() {
    console.log("Test", this.$refs);
  },
  mounted() {
    this.tabulator = new Tabulator("#table", {
      height: 200,
      data: this.tableData,
      layout: "fitColumns",
      columns: [
        { title: "Name", field: "name", sorter: "string", width: 150 },
        {
          title: "Age",
          field: "age",
          sorter: "number",
          align: "left",
          formatter: "progress"
        },
        {
          title: "Favourite Color",
          field: "col",
          sorter: "string",
          sortable: false
        },
        {
          title: "Date Of Birth",
          field: "dob",
          sorter: "date",
          align: "center"
        }
      ],
      rowClick(e, id, data, row) {
        alert("Row " + id + " Clicked!!!!");
      }
    });
  }
};
</script>
