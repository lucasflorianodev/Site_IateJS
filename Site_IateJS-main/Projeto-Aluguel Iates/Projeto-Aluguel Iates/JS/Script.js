function receber () {
    var nome = document.getElementById ("nome");
    var email = document.getElementById ("email");
    var mensagem = document.getElementById ("mensagem");

    var receber = {
        nome: nome.value,
        email: email.value,
        mensagem: mensagem.value,
    }

    inserirMensagem(receber);

    console.log(nome.value);

}

function verificar () {
    var email = document.getElementById ("email");
    var senha = document.getElementById ("senha");

    var verify = {
        email: email.value,
        senha: senha.value,
    }

    var validacao = validarUsuario(verify); 

    if(validacao == true) {
        window.open("mensagens.html");
    } else {
        window.alert ("Email ou senha incorretos.");
    }
    

}