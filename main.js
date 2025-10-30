const avanca = document. querySelectorAll (".btn-proximo")
console.log(avanca)

avanca.forEach(button =>{
    button.addEventListener('click' , function(){
       const atual = document.querySelector('.ativo')
       const proximosso="passo-"+ this.getAttribute('data-proximo')
       console.log(proximosso, atual)
       atual.classList.remove('ativo')
       document.getElementById(proximosso).classList.add('ativo')
    })
}

)
