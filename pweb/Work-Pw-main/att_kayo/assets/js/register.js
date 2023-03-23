let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
validNome = false

let labelUsuario = document.querySelector('#labelUsuario')
let usuario = document.querySelector('#usuario')
validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let LabelconfirmSenha = document.querySelector('#LabelconfirmSenha')
validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

nome.addEventListener('keyup', () =>{
    if(nome.value.length < 4){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = ('<strong> Insira no minimo 4 caracteres</strong>')
        nome.setAttribute('style', 'color: red')
        validNome = false
    } else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = ('<strong>Nome</strong>')
        nome.setAttribute('style', 'color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () =>{
    if(usuario.value.length < 5){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = ('<strong> Insira no minimo 7 caracteres</strong>')
        usuario.setAttribute('style', 'color: red')
        validUsuario = false
    } else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = ('<strong>Usuario</strong>')
        usuario.setAttribute('style', 'color: green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () =>{
    if(senha.value.length < 8){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = ('<strong> Insira no minimo 8 caracteres</strong>')
        senha.setAttribute('style', 'color: red')
        validSenha = false
    } else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = ('<strong>senha</strong>')
        senha.setAttribute('style', 'color: green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () =>{
    if(senha.value != confirmSenha.value){
        LabelconfirmSenha.setAttribute('style', 'color: red')
        LabelconfirmSenha.innerHTML = ('<strong>As Senhas não  Conferem</strong>')
        confirmSenha.setAttribute('style', 'color: red')
        validConfirmSenha = false
    } else{
        LabelconfirmSenha.setAttribute('style', 'color: green')
        LabelconfirmSenha.innerHTML = ('<strong> Confirmar Senha</strong>')
        confirmSenha.setAttribute('style', 'color: green')
        validConfirmSenha = true
    }
})


function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmSenha){
     

        alert("Logado com sucesso")
        msgSucess.setAttribute('style',  'display: block')
        msgSucess.innerHTML = ('<strong>Cadastrando Usuario../</strong>')
        msgError.setAttribute('style',  'display: none')
        msgError.innerHTML = ('')

        let  cadastro = JSON.parse(localStorage.getItem('cadastro') || '[]')

        cadastro.push({
            nome: nome.value,
            user: usuario.value,
            pass: senha.value
        })
    
        localStorage.setItem('cadastro', JSON.stringify(cadastro))

        window.location.href = "signin.html"

    }else{
        alert("Revise seu campos de cadastro!")
        msgError.setAttribute('style',  'display: block')
        msgError.innerHTML = ('<strong>Preencha Corretamente todos os campos requisitados.</strong>')
        msgSucess.innerHTML = ('')
        msgSucess.setAttribute('style',  'display: none')
    }
}

