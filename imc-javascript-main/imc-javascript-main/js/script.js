function calcular() {
    const nome = document.getElementById("nome").value;
    const alturaM = parseFloat ( document.getElementById("altura").value);
    const peso = parseFloat (document.getElementById("peso").value);

    let Imc = peso / (alturaM * alturaM)
    let situação = "normal"


    if (isNaN(alturaM) || nome.trim().length == 0 || isNaN(peso)) {
        alert("Preencha todos os campos");
        return false;
    }

    if (Imc < 18.5)
        situação = "Abaixo do peso"
    if (Imc >= 18.5 && Imc < 24)
        situação = "Peso normal"
    if (Imc >= 25 && Imc < 30)
        situação = "Excesso de peso"
    if (Imc >= 30 && Imc < 35)
        situação = "Obesidade"
    if (Imc > 35)
        situação = "Super Obesidade"

    tabela.innerHTML +=
    `
    <tr>
        <th>${nome}</th>
        <th>${alturaM}</th>
        <th>${peso}</th>
        <th>${Imc}</th>
        <th>${situação}</th>
    </tr>
    `
}