<template>
  <div class="card" style="width: 90rem;">
    <h2 class="card-title">Itens da Nota fiscal</h2>
    <br />
    <br />

    <div class="card" style="width: 18rem;">
      <div class="form-group">
        <label>Adicionar produto</label>
        <v-select
          placeholder="Selecione um produto"
          :reduce="produto => produto"
          label="descricao"
          :options="produtosParaIncluir"
          @input="adicionarProduto"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8">
        <div id="tabulator-controls" class="table-controls hidden-xs">
          <button class="btn btn-success" @click.prevent.stop="download()">
            <i class="fa fa-download"></i> Download CSV
          </button>

          <button class="btn btn-success" @click.prevent.stop="downloadPdf()">
            <i class="fa fa-download"></i> Download PDF
          </button>

          <button class="btn btn-success" @click.prevent.stop="downloadPdf()">
            <i class="fa fa-download"></i> Download PDF
          </button>

          <button class="btn btn-success" @click.prevent.stop="downloadExcel()">
            <i class="fa fa-download"></i> Download EXCEL
          </button>

          <button
            @click.prevent.stop="adicionarLinha()"
            class="btn btn-success"
          >
            <i class="fa fa-plus"></i> Adicionar produto
          </button>

          <button @click.prevent.stop="buscar()" class="btn btn-success">
            <i class="fa fa-plus"></i> Buscar
          </button>
        </div>
      </div>
    </div>

    <Vue-Tabulator ref="table" :options="options" v-model="itens"  @cell-click="deletarProduto"/>

    <div class="col-lg-12">
      <button
        name="add-row"
        @click.prevent.stop="gerarNotaFiscal()"
        class="btn btn-primary"
      >
        <i class="fa fa-plus"></i> Gerar nota fiscal
      </button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default{


    data() {
    return {
      produtosParaIncluir: [
        {
          produtoKey: 2012,
          descricao: "guarana",
          saldoEstoque: 420,
          quantidadeDevolver: 0,
          custo: 1.322,
          custoTotal: 0
        },
        {
          produtoKey: 9658,
          descricao: "alface",
          saldoEstoque: 50,
          quantidadeDevolver: 0,
          custo: 0.66,
          custoTotal: 0
        },
        {
          produtoKey: 6060,
          descricao: "couve",
          saldoEstoque: 50,
          quantidadeDevolver: 0,
          custo: 1.99,
          custoTotal: 0
        },
        {
          produtoKey: 85547,
          descricao: "farinha de mandioca",
          saldoEstoque: 45,
          quantidadeDevolver: 0,
          custo: 6.55,
          custoTotal: 0
        }
      ],

      itens: [
        {
          produtoKey: 1010,
          descricao: "acucar",
          saldoEstoque: 100,
          quantidadeDevolver: 0,
          custo: 1.33,
          custoTotal: 0
        },
        {
          produtoKey: 1012,
          descricao: "cerveja",
          saldoEstoque: 1200,
          quantidadeDevolver: 0,
          custo: 1.55,
          custoTotal: 0
        }
      ],
      quantidadeDevolverAuxiliar: 0,
      options: {
        data: this.itens,
        index: "produtoKey",
        selectable: true,
        height: "200px",
        layout: "fitColumns",
        //ajaxURL: "http://jsonplaceholder.typicode.com/albums",
        //  pagination: "local",
        // ajaxProgressiveLoad:"scroll",
        //  paginationSize: 5,
        placeholder: "Nenhum resultado entrado",
        columns: [
          {
            title: "Código",
            field: "produtoKey",
            width: 200,
            editor: true,
            sorter: "number"
          },
          {
            title: "Descrição",
            field: "descricao",
            sorter: "string",
            headerFilter: "input"
          },
          {
            title: "Estoque",
            field: "saldoEstoque",
            width: 200
          },
          {
            title: "Quantidade a devolver",
            field: "quantidadeDevolver",
            width: 200,
            sorter: "number",
            editor: true,
            cellEditing: function(cell) {
              this.quantidadeDevolverAuxiliar = cell
                .getRow()
                .getData().quantidadeDevolver;
            },
            cellEdited: function(cell) {
              let saldoEstoque = cell.getRow().getData().saldoEstoque;

              let quantidadeDevolver = cell.getRow().getData()
                .quantidadeDevolver;

              let custo = cell.getRow().getData().custo;

              if (quantidadeDevolver > saldoEstoque) {
                cell
                  .getRow()
                  .getData().quantidadeDevolver = this.quantidadeDevolverAuxiliar;
               
               alert(
                  "A quantidade a devolver não pode ser maior que o saldo de estoque"
                );
                
                
              }else{
                cell.getRow().getData().custoTotal = quantidadeDevolver * custo;
              }
            }
          },
          {
            title: "Custo",
            field: "custo",
            width: 200,
            sorter: "number",
            editor: true
          },
          {
            title: "Custo total",
            field: "custoTotal",
            formatter: "money",
            formatterParams: {
              symbol: "R$ ",
              decimal: ",",
              thousand: ".",
              precision: false
            }
          },
          {
            title: "Ações",
            formatter: "buttonCross",
            field: "deletarProduto",
            hozAlign: "center"
          
          }
        ]
      }
    };
  },
  methods: {
  
    deletarProduto(e, cell) {
    

      if(cell.getField() === 'deletarProduto'){
            //let tabulatorInstance = this.$refs.table.getInstance();

debugger;
            let posicao = cell.getRow().getPosition();
            cell.getRow().delete();
            this.itens.splice(posicao, 1);
      }
       
    },
  
    adicionarProduto(produto) {
      let tabulatorInstance = this.$refs.table.getInstance();
      this.itens.push(produto);

      tabulatorInstance.addData([produto], true);
   },

    buscar() {
      let tabulatorInstance = this.$refs.table.getInstance();

      tabulatorInstance.setData(this.itens);
    },
    download() {
      let tabulatorInstance = this.$refs.table.getInstance();

      tabulatorInstance.download("csv", "Tabulator Example Download.csv");
    },
    downloadPdf() {
      let tabulatorInstance = this.$refs.table.getInstance();

      tabulatorInstance.download("pdf", "data.pdf", {
        orientation: "portrait",
        title: "Itens nota fiscal"
      });
    },
    downloadJson() {
      let tabulatorInstance = this.$refs.table.getInstance();

      tabulatorInstance.download("json", "data.json");
    },
    downloadExcel() {
      let tabulatorInstance = this.$refs.table.getInstance();

      tabulatorInstance.download("xlsx", "data.xlsx", { sheetName: "My Data" });
    },
    adicionarLinha() {
      let tabulatorInstance = this.$refs.table.getInstance();

      tabulatorInstance.addRow({});
    },
    gerarNotaFiscal() {
      let tabela = this.$refs.table.getInstance();

      tabela.getData().forEach(function(item) {
        console.log(item);
      });
    }
  }
};
</script>
