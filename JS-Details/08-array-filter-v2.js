const produtos = [
    {
        descrição: "Camisa Polo",
        cor: "Preta",
        tamanho: "G",
        preco: 49.99,
        Perfil: "M",
        quantidade: 10,
        promocao: false
    },
    {
        descrição: "Camisa Polo",
        cor: "Branco",
        tamanho: "M",
        preco: 49.99,
        Perfil: "M",
        quantidade: 15,
        promocao: false
    },
    {
        descrição: "Camisa Supreme",
        cor: "Preto",
        tamanho: "P",
        preco: 69.50,
        Perfil: "F",
        quantidade: 5,
        promocao: true
    },
    {
        descrição: "Camisa Polo",
        cor: "Preta",
        tamanho: "GG",
        preco: 49.99,
        Perfil: "M",
        quantidade: 3,
        promocao: true
    },
    {
        descrição: "Jaqueta",
        cor: "Preta",
        tamanho: "GG",
        preco: 109.99,
        Perfil: "F",
        quantidade: 3,
        promocao: false
    },
]

CamisaF = produtos.filter((cf) => {
     return cf.perfil == "F"
})

let quantidadePromocao = 0;

CamisaF = produtos.filter((cf) => {
     if (cf.promocao == true)
       return quantidadePromocao += cf.quantidade
     
     return cf.promocao == true
})

console.log(`Quantidade de camisas em promoção: ${quantidadePromocao}`)
console.log(CamisaF)