//Botoes 

const btnContraste = document.getElementbyId("bnt-contraste");
const btAumentar = document.getElementbyId("btn-aumentar-texto")
const btDiminuir = document.getElementbyId("btn-diminuir-texto")

//Mudar tamanho da fonte

let tamanhoAtualFonte = 100;

//Alto constraste

btnContraste.addEventListener("Click", ()=>{
    document.body.classList.toggle("alto-contraste");

    //leitor de tela

    const ativo = document.body.classList.contains("alto-contraste");
    btnContraste.setAttribute("aria-pressed",ativo);


});

//Aumentar o erro


btAumentar.addEventListener("click", () =>{
    if (tamanhoAtualFonte < 150) {
        tamanhoAtualFonte +=10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`



    }

});

//diminuir o texto

btDiminuir.add("click",() =>{
    if (tamanhoAtualFonte > 90){
        tamanhoAtualFonte -=10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;

    }



});
});


