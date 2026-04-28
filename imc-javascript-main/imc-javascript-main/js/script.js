async function calcular() {
    const nome = document.getElementById("nome").value.trim();
    const alturaM = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const IMC = (calcularIMC(peso, alturaM).toFixed(2));
    const situação = calcSituação(IMC)


    if (isNaN(alturaM) || nome.length == 0 || isNaN(peso)) {
        alert("Preencha todos os campos");
        return false;
    }

    let objetoIMC = {
        nome: nome,
        altura: alturaM,
        peso: peso,
        IMC: IMC,
        situação: situação
    }

    //Cadastrar na API
    const dadosGravados = await cadastrarIMC(objetoIMC)
    console.log(dadosGravados)

    if ("error" in dadosGravados)
        alert(dadosGravados.error)
    else {
        cadastro.innerHTML +=
            `
        <tr>
            <th>${nome}</th>
            <th>${alturaM}</th>
            <th>${peso}</th>
            <th>${IMC}</th>
            <th>${situação}</th>
        </tr>
        `
        carregarDados()
    }


}

async function cadastrarIMC(objetoIMC) {
    try {
        const retorno = await fetch("http://localhost:3000/IMCs", {
            method: "POST",
            body: JSON.stringify(objetoIMC),
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

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function calcSituação(IMC) {
    if (IMC < 16) {
        situação = "Magraza grave"
    }
    if (IMC < 17) {
        situação = "Magraza moderada"
    }
    if (IMC < 18.5) {
        situação = "Magraza leve"
    }
    else if (IMC < 25) {
        situação = "Peso normal"
    }
    else if (IMC < 30) {
        situação = "Excesso de peso"
    }
    else if (IMC < 35) {
        situação = "Obesidade (grau 1)"
    }
    else if (IMC < 40) {
        situação = "Obesidade (grau 2)"
    }
    else {
        situação = "Obesidade (grau 3)"
    }

    return situação
}

async function carregarDados()
{
    alert("Carregando...")

    try{

    const retorno = await fetch("http://localhost:3000/IMCs")

    let IMCs = await retorno.json()

    IMCs.sort((a, b) => a.nome.localeCompare(b.nome))
    cadastro.innerHTML = ""

    for(i = 0; i < IMCs.length; i++)
    { 
        cadastro.innerHTML +=
        `
        <tr>
            <td>${IMCs[i].nome}</td>
            <td>${IMCs[i].altura}</td>
            <td>${IMCs[i].peso}</td>
            <td>${IMCs[i].IMC}</td>
            <td>${IMCs[i].situação}</td>     
        </tr>
        `
    }
}
catch(error)
{
    alert("falha ao carregar")
}
}