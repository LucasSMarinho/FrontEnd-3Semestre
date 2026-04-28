async function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat( document.getElementById('n1').value ) ;
    let n2 = parseFloat( document.getElementById("n2").value );
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;
    
    if( isNaN(n1) || isNaN(n2) ){
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
    }


    //processamento
    if(op == 'soma'){
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if(op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao'){
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao'){

        if(n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }
            
    } else {
        resultado = "Operação Inválida";
    }

    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;


    
    //Criando o objeto
    let objetoCalc = {
        N1: n1,
        N2: n2,
        Operacao: op,
        Resultado: resultado
    }

    //Cadastrar na API
    const dadosGravados = await cadastrarCalc(objetoCalc)
    console.log(dadosGravados)

    if ("error" in dadosGravados)
        alert(dadosGravados.error)
    else {
        data.innerHTML +=
            `
        <article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${objetoCalc.N1}</span>
            <span><strong>Segundo Número:</strong>  ${objetoCalc.N2}</span>
            <span><strong>Operação:</strong> ${objetoCalc.Operacao.value}</span>
            <span><strong>Resultado:</strong> ${objetoCalc.Resultado}</span>
        </article>
        `
        carregarCards()
    }
}




/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
 function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if(valor2 == 0) {
        return 'Não é um número';
    }
    
    return valor1 / valor2;
}


async function carregarCards()
{
    alert("Carregando...")

    try{

    const retorno = await fetch("http://localhost:3000/calculos")

    let Calculos = await retorno.json()

    data.innerHTML = ""

    for(i = 0; i < Calculos.length; i++)
    { 
        data.innerHTML +=
        `
        <article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${Calculos[i].N1}</span>
            <span><strong>Segundo Número:</strong>  ${Calculos[i].N2}</span>
            <span><strong>Operação:</strong> ${Calculos[i].Operacao}</span>
            <span><strong>Resultado:</strong> ${Calculos[i].Resultado}</span>
        </article>
        `
    }
}
catch(error)
{
    alert("falha ao carregar")
}
}

async function cadastrarCalc(objetoCalc) {
    try {
        const retorno = await fetch("http://localhost:3000/calculos", {
            method: "POST",
            body: JSON.stringify(objetoCalc),
            headers: {
                "Conetnt-Type": "application/json; charset=UTF-8"
            }
        });
        const dadosGravados = await retorno.json();
        return await dadosGravados;

    }
    catch (error) {
        console.log(error)
        return await 
        {
            error: "Problemas para gravar na API"
        }
    }
}