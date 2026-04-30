const numeros = [5, 10, 15, 30, 10, 15]

const numeroEncontrado = numeros.filter((v) => {
    return v >= 10 && v < 20;
});


const nomes = ["Wallyson", "Matheus Felix", "Laura", "Nathan", "Bruno", "Marcos", "Felipe", "Amy"]

const nomesFiltrados = nomes.filter((n) =>{
    const primeiraLetra = n.substring(0, 1);
        return primeiraLetra == "N" || primeiraLetra == "L"
});


console.log(nomesFiltrados)