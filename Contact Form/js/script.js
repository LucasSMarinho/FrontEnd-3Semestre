
function validarFormulario() {

    let nome = document.getElementById("Nome").value;
    let sobrenome = document.getElementById("Sobrenome").value;
    let email = document.getElementById("Email").value;
    let DDI = document.getElementById("DDI").value;
    let DDD = document.getElementById("DDD").value;
    let Phone = document.getElementById("Phone").value;
    let Cep = document.getElementById("Phone").value;
    let Rua = document.getElementById("Rua").value;
    let Numero = document.getElementById("Numero").value;
    let Bairro = document.getElementById("Bairro").value;
    let Cidade = document.getElementById("Cidade").value;
    let Estado = document.getElementById("Estado").value;
    let Complemento = document.getElementById("Complemento").value;
    let Anotacoes = document.getElementById("Anotacoes").value;
    
    let quantidadeErros = 0;

    //Nome
    if (nome.trim().length == 0) {
        formError("Nome");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Nome")
    }


    //Sobrenome
    if (sobrenome.trim().length == 0) {
        formError("Sobrenome");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Sobrenome")
    }


    //Email
    if (email.trim().length == 0) {
        formError("Email");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Email")
    }

    //DDI
    if (DDI.trim().length == 0) {
        formError("DDI");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("DDI")
    }

    //DDD
    if (DDD.trim().length == 0) {
        formError("DDD");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("DDD")
    }

    //Phone
    if (Phone.trim().length == 0) {
        formError("Phone");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Phone")
    }

    //Cep
    if (Cep.trim().length == 0) {
        formError("Cep");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Cep")
    }

    //Rua
    if (Rua.trim().length == 0) {
        formError("Rua");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Rua")
    }

    //Numero
    if (Numero.trim().length == 0) {
        formError("Numero");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Numero")
    }


    //Bairro
    if (Bairro.trim().length == 0) {
        formError("Bairro");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Bairro")
    }

    //Cidade
    if (Cidade.trim().length == 0) {
        formError("Cidade");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Cidade")
    }

    //Estado
    if (Estado.trim().length == 0) {
        formError("Estado");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Estado")
    }

    //Verifica
    if (quantidadeErros != 0) {
        alert("Existem " + quantidadeErros + " erros no formúlario")
        document.getElementById("Corpo").style.backgroundImage = "red"
        quantidadeErros = 0;
    }
    else {
        let objetoContato = {
            Nome: nome,
            Sobrenome: sobrenome,
            Email: email,
            DDI: DDI,
            DDD: DDD,
            Phone: Phone,
            Cep: Cep,
            Rua: Rua,
            Numero: Numero,
            Bairro: Bairro,
            Cidade: Cidade,
            Estado: Estado,
            Complemento: Complemento,
            Anotacoes: Anotacoes
        }


        let cadastrado = cadastrarContato(objetoContato);
        alert("Cadastrado com Sucesso")
    }

}


function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red"
    document.getElementById(idCampo).style.boxShadow = "0 0 15px red"
}

function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "1px solid rgb(172, 172, 172)"
    document.getElementById(idCampo).style.boxShadow = "0 0 0 0"
}

async function buscarEndereco(Cep) {
    //Async - Não sincrono, usado quando precissamos esperar uma resposta para continuar

    if (Cep.trim().length < 8) {
        alert("Cep incompleto")
        return false
    }

    // buscar o Cep la na ViaCep
    try {

        aguardandoCampos()
        //literal templates
        let retorno = await fetch(`http://viacep.com.br/ws/${Cep}/json/`);
        let dados = await retorno.json();


       
        document.getElementById("Rua").value = dados.logradouro;
        document.getElementById("Bairro").value = dados.bairro;
        document.getElementById("Complemento").value = dados.complemento;
        document.getElementById("Cidade").value = dados.localidade;
        document.getElementById("Estado").value = dados.uf;
        document.getElementById("DDD").value = dados.ddd;
    }
    catch {
        alert("Erro ao procurar CEP")
    }

}


function aguardandoCampos()
{
        document.getElementById("Rua").style.value = "...";
        document.getElementById("Bairro").value = "...";
        document.getElementById("Complemento").value = "...";
        document.getElementById("Cidade").value = "...";
        document.getElementById("Estado").value = "...";
        document.getElementById("DDD").value = "...";
}

async function cadastrarContato(objetoContato)
{
  console.log(objetoContato)

    const resposta = await fetch("http://localhost:3000/contatos", {
    method: "POST",
    body: JSON.stringify(objetoContato)
  })
}