let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
const flechaAfter = document.querySelector('#after')
const flechaBefore = document.querySelector('#before')
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

let value;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

// flechaAfter.addEventListener('click', ()=>changerPosition(1) )
// flechaBefore.addEventListener('click', ()=>changerPosition(-1) )

function changerPosition(change){
    console.log(change)
}
function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },2500)
    }
}

// menu responsive

let boton = document.getElementById('icono')
let enlaces = document.getElementById('enlaces')
let contadorMenu = 0

boton.addEventListener("click", function (){
    if(contadorMenu ==0){
        enlaces.className = ("enlaces dos")
        contadorMenu=1
    }else{
        enlaces.classList.remove('dos')
        enlaces.className = ('enlaces uno')
        contadorMenu = 0
    }
})