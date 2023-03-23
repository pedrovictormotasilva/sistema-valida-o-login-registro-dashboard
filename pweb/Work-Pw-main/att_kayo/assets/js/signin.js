senha.addEventListener("keyup", () => {
  if (senha.value.length < 8) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "<strong> Insira no minimo 8 caracteres</strong>";
    senha.setAttribute("style", "color: red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    labelSenha.innerHTML = "<strong>senha</strong>";
    senha.setAttribute("style", "color: green");
  }
});

function logar() {
  let usuario = document.getElementById("usuario");
  let labelUsuario = document.getElementById("labelUsuario");

  let senha = document.getElementById("senha");
  let labelSenha = document.getElementById("labelSenha");

  let msgError = document.getElementById("msgError");

  let cadastro = [];

  let userValid = {
    nome: "",
    user: "",
    pass: "",
  }

  cadastro = JSON.parse(localStorage.getItem('cadastro'));
  
    cadastro.forEach((item) => {

        if(usuario.value == item.user && senha.value == item.pass){

            userValid = {
                nome: item.nome,
                user: item.user,
                pass: item.pass
            }
           
        }
        
    })
   if(usuario.value == userValid.user && senha.value == userValid.pass){
    window.location.href = "usuarios.html";
    alert  ('logado com sucesso')
   

   }else{
alert('Usuario ou senha incorretos')
    labelUsuario.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.setAttribute('style', 'border-color: red')
    msgError.innerHTML = 'Usuario ou Senha Incorretos!'
    usuario.focus()
   }
    }