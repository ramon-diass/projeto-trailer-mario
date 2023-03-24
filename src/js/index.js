/*
Objetivo 1: usuário conseguir clicar na modal do trailer
Objetivo 2: quando o usuário clicar no "X", fechar a modal
*/

//console.log('mostrar o document', document);
//console.log(document.querySelector('.botao-trailer'));
const botaoTrailer = document.querySelector(".botao-trailer"); //colocar o botao-trailer em uma constante
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
	modal.classList.toggle("aberto");
} 

botaoTrailer.addEventListener("click", () => {
    //console.log("clicou no botão veja o trailer"); console.log é usado para ver se um determinado comando está funcionando, vê na parte "inspecionar" na página do navegador
    alternarModal();
    video.setAttribute("src", linkDoVideo);//adicionar a função aberto na classe modal no código html
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");//remover a função aberto na classe modal no código html
});