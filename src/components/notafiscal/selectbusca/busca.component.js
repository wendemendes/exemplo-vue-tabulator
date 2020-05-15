export default {
  name: 'SelectBuscaProduto',
  components: {},
  data() {
    return {
      selectProdutos: '',
      produto:{},
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
          custoTotal: 0,   
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
      ]
    };
  },

  watch: {
    // whenever question changes, this function will run
    selectProdutos: function (value) {

    
      this.produto = {
        produtoKey: value.produtoKey,
        descricao: value.descricao,
        saldoEstoque: value.saldoEstoque,
        quantidadeDevolver: 0,
        custo: value.custo,
        custoTotal: 0
      };

    }
  },
  methods: {
    getProduto(produto) {

      this.$emit('adicionar-produto', produto)

    }
  }
};


