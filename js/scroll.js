let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector('#nav-scroll');


window.addEventListener('scroll', function(){
    let ubicacionActual = window.pageYOffset

    if(ubicacionPrincipal >= ubicacionActual){
        $nav.style.top = "0px"
    }else{
        $nav.style.top = "-13.1rem"
    }

    ubicacionPrincipal = ubicacionActual;


})