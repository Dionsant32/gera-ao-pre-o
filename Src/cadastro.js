function salvar(){
    alert("Processando");
    var nome = document.getElementById("nome").value;
    var email= document.getElementById("email").value;
    var cpf= document.getElementById("cpf").value;
    var telefone= document.getElementById("telefone").value;
    var endereco= document.getElementById("endereço").value;
    var bairro= document.getElementById("bairro").value;
    var municipio= document.getElementById("Município").value;
    var password= document.getElementById("password").value;
    var usuario = new Object();
    usuario.nome=nome;
    usuario.email=email;
    usuario.cpf=cpf;
    usuario.telefone=telefone;
    usuario.endereco=endereco;
    usuario.bairro=bairro;
    usuario.municipio=municipio;
    usuario.password=password;
    var jm = JSON.stringify(usuario);
    var ls = window.localStorage;
    ls.setItem("usuarios", jm);
    
}
function validar() {
    var email = document.getElementById("email");
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var telefone = document.getElementById("telefone");
    var endereco = document.getElementById("endereço");
    var bairro = document.getElementById("bairro");
    var municipio = document.getElementById("Município");
    var password = document.getElementById("password");
    var passconfirmation = document.getElementById("passconfirmation");
  
    
    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return;
      }
    if (nome.value == "") {
      alert("Nome não informado");
  
      nome.focus();

      return;
    }
    if (cpf.value == "") {
        alert("CPF/CNPJ não informado");
        cpf.focus();
        return;
      }
      if (telefone.value == "") {
        alert("Telefone não informado");
        telefone.focus();
        return;
      }
    if (endereco.value == "") {
      alert("Endereço não informado");
      endereco.focus();
      return;
    }
    if (bairro.value == "") {
      alert("Bairro não informado");
      bairro.focus();
      return;
    }
    if (municipio.value == "") {
      alert("Município não informado");
      municipio.focus();
      return;
    }
    if (password.value == "") {
        alert("Senha não informada");
        password.focus();
        return;
      }
      if (password.value == "") {
        alert("Senhas diferentes");
        passconfirmation.focus();
        return;
      } alert("Formulário enviado!"); 
    }
