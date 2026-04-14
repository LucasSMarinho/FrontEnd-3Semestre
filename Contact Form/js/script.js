function validarFormulario() {
    let nome = document.getElementById("Nome").value;
    let sobrenome = document.getElementById("Sobrenome").value;
    let email = document.getElementById("Email").value;

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