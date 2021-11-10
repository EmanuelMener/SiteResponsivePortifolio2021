function confirmar_senha_do_login(form) {
    var senha = document.getElementById("password").value;
    var confirmar_senha = 12345;
    if (senha != confirmar_senha) {
        alert("Senha não confere");
        document.getElementById("confirmar_senha").value = "";
    }

    if (senha == confirmar_senha) {
        alert("Você está Logado. Aproveite! 😀");
    }
}

