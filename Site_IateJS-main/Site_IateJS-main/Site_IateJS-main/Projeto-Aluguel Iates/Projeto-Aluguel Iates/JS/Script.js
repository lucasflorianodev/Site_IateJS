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

function load(){
    
    var mensagens = obterMensagens();

    var tabela = document.getElementById("tabela");
    
    for (var i = 0; i < mensagens.length; i++){
    var linha = document.createElement("tr");

    var colunaNome = document.createElement("td");
    colunaNome.innerHTML = mensagens[i].nome;

    var colunaEmail = document.createElement("td");
    colunaEmail.innerHTML = mensagens[i].email;

    var colunaMensagem = document.createElement("td");
    colunaMensagem.innerHTML = mensagens[i].mensagem;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaEmail);
    linha.appendChild(colunaMensagem);
    tabela.appendChild(linha);
    }
}