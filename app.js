// slider 
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
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

// ventana modal 
window.onload = function(){
let modal = document.getElementById('miModal');
let abrir2 = document.getElementById('abrir2');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');
let flex = document.getElementById('flex');

modalWindow(modal, abrir, abrir2,cerrar,flex)
}



function modalWindow(modal, abrir, abrir2,cerrar,flex){

     cerrar.addEventListener('click', e =>{
         modal.style.display = 'none'
     })


     abrir2.addEventListener('click', e =>{
        modal.style.display = 'block';
    })
     abrir.addEventListener('click', e =>{
        modal.style.display = 'block';
    })

    window.addEventListener('click', function(e){
        console.log(e.target);
        if(e.target == flex){
            modal.style.display = 'none';
        }
    });
}
