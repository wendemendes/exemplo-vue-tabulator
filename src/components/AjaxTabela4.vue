<template>
  <div class="card" style="width: 90rem;">
    <button @click.stop.prevent="getUsers()" class="btn btn-success">
      Buscar
    </button>
    <br /><br />

    <div class="row">
      <div class="col-lg-12">
        <div id="tabulator-controls" class="table-controls  hidden-xs">
          <i class="fa fa-filter fa-fw"></i>
          <input name="name" type="text" placeholder="Filter Table By Name" />

          <button
            class="btn btn-success"
            name="download"
            @click.prevent.stop="download()"
          >
            <i class="fa fa-download"></i> Download Data as CSV
          </button>

          <button
            class="btn btn-success"
            name="undo"
            @click.prevent.stop="desfazer()"
          >
            <i class="fa fa-undo"></i> Undo Edit
          </button>

          <button
            name="add-row"
            @click.prevent.stop="adicionarLinha()"
            class="btn btn-success"
          >
            <i class="fa fa-plus"></i> Add Row
          </button>
        </div>
      </div>
    </div>

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
        ajaxURL: "http://jsonplaceholder.typicode.com/albums",
        pagination: "local",
        // ajaxProgressiveLoad:"scroll",
        paginationSize: 5,
        placeholder: "Nenhum resultado",
        columns: [
          {
            title: "ID",
            field: "id",
            sorter: "string",
            width: 200,
            editor: true
          },
          {
            title: "Title",
            field: "title",
            sorter: "string"
          }
        ]
      }
    };
  },
  methods: {
    getUsers() {
      let tabulatorInstance = this.$refs.table.getInstance();

      tabulatorInstance.setData("http://jsonplaceholder.typicode.com/albums");
    },
    download() {
      let tabulatorInstance = this.$refs.table.getInstance();

      tabulatorInstance.download("csv", "Tabulator Example Download.csv");
    },
    desfazer() {
      let tabulatorInstance = this.$refs.table.getInstance();

      tabulatorInstance.undo();
      console.log('desfaz');
    },
    adicionarLinha() {
      let tabulatorInstance = this.$refs.table.getInstance();

      tabulatorInstance.addRow({});
    }
  }
};
</script>
