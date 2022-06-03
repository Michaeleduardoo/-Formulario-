const form = window.document.getElementById("form")
const username =window.document.getElementById("username")
const email = window.document.getElementById("email")
const senha = window.document.getElementById("senha")
const celular = window.document.getElementById("telefone")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    itens();
})

function itens(){
    const usernameValue= username.value;
    const emailValue= email.value;
    const senhaValue= senha.value;
    const celularValue= celular.value;

    if(usernameValue === ""){
        setErrofor(username , "O nome do usuário é obrigatorio");
    }else{
        steSucess(username)
    }

    if(emailValue === ""){
        setErrofor(email , "O email é obrigatorio");
    }else{
        steSucess(email)
    }

    
    if(senhaValue === ""){
        setErrofor(senha , " A senha é obrigatorio");
    }else{
        steSucess(senha)
    }

    if(celularValue === ""){
        setErrofor(celular , "O telefone é obrigatorio");
    }else{
        steSucess(celular)
    }

}

function setErrofor(input , messagem){
    const caixaform = input.parentElement;
    const small = caixaform.querySelector("small")

    small.innerText= messagem;
    caixaform.className = "caixa-form error"
}

function steSucess(input){
    const caixaform = input.parentElement;
    caixaform.className = "caixa-form sucess"
}

