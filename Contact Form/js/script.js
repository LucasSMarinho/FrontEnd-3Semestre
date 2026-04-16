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
    let Complemento = document.getElementById("Complemento").value;
    let Bairro = document.getElementById("Complemento").value;
    let Cidade = document.getElementById("Complemento").value;
    let Estado = document.getElementById("Complemento").value;
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

    //Complemento
    if (Complemento.trim().length == 0) {
        formError("Complemento");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Complemento")
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

    //Anotacoes
    if (Anotacoes.trim().length == 0) {
        formError("Anotacoes");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("Anotacoes")
    }

    //Verifica
    if (quantidadeErros != 0) {
        alert("Existem " + quantidadeErros + " erros no formúlario")
        quantidadeErros = 0;
    }
    else {
        alert("Formulário enviado com sucesso");
        reiniciaTodasAsBordas();
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