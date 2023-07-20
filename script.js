function logar(){

    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if(nome == "admin" && senha == "admin"){
        alert("Sucesso")
        location.href = "home.html";
    }else{
        alert("Senha ou usuário incorreta")
    }

}