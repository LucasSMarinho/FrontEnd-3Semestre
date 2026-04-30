const produtos = [
    {
        descrição: "Camisa Polo",
        cor: "Preta",
        tamanho: "G",
        preco: 49.99,
        Perfil: "M",
        quantidade: 16,
        promocao: false
    },
    {
        descrição: "Camisa Polo",
        cor: "Branco",
        tamanho: "M",
        preco: 49.99,
        Perfil: "M",
        quantidade: 115,
        promocao: false
    },
    {
        descrição: "Camisa Supreme",
        cor: "Preto",
        tamanho: "P",
        preco: 69.50,
        Perfil: "F",
        quantidade: 54,
        promocao: true
    },
    {
        descrição: "Camisa Polo",
        cor: "Preta",
        tamanho: "GG",
        preco: 49.99,
        Perfil: "M",
        quantidade: 13,
        promocao: true
    },
    {
        descrição: "Jaqueta",
        cor: "Preta",
        tamanho: "GG",
        preco: 109.99,
        Perfil: "F",
        quantidade: 33,
        promocao: false
    },
]

var precoTotal = 0;
totalEstoque = produtos.reduce((total, produto) => {
         precoTotal += produto.preco * produto.quantidade
         return total + produto.quantidade
}, 0)

console.clear
console.log(totalEstoque)
console.log(produtos)
