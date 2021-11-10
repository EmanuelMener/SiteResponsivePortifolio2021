function confirmar_senha_do_login(form) {

    var senha = document.getElementById("password").value;
    var usuario = document.getElementById("nome").value;

    var confirmar_senha = 12345;
    var confirmar_usuario = "Emanuel Menezes"

    if (usuario != confirmar_usuario, senha != confirmar_senha) {
        alert("Senha não confere");
        
    }

    if (senha == confirmar_senha & confirmar_usuario == usuario) {
        alert("Você está Logado. Aproveite! 😀");
    }
}