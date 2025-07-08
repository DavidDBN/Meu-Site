/* 
Document = HTML
querySelector = pegar ou selecionar um titem do HTML
addEventListener = monitorar e contar quando acontecer algo
*/

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".capa-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

// ligar som
botaoSom.addEventListener("click", ligaSom)
video.addEventListener("click", desligarSom)

function ligaSom(){
    video.muted = !video.muted
}

/* ! = inverso / inverte tudo */

function desligarSom(){
    video.muted = true
}

// mostrar o modal
botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"

}

function esconderModal(){
    modal.style.display = "none"

}

// tocar o audio

window.addEventListener("click", tocarAudio)

function tocarAudio(){
    audio.play() 
}