


const cambiarDisenio = () => {
    const navNormal = document.querySelector("header .header__zonaNavegacion")
    const navHamb= document.querySelector("header .header__zonaNavegacionHamb");

    if(!navNormal.getAttribute("hidden")){
        console.log("Mostrar nav hamburger")
        navNormal.setAttribute("hidden", "true")
        navHamb.removeAttribute("hidden")
    }
}

const cambiarDisenio2 = () => {
    const navNormal = document.querySelector("header .header__zonaNavegacion")
    const navHamb= document.querySelector("header .header__zonaNavegacionHamb");

    if(navNormal.getAttribute("hidden")){
        console.log("Mostrar nav normal")
        navHamb.setAttribute("hidden", "true")
        navNormal.removeAttribute("hidden")
        
    }
}


window.onresize = () => {
    if(window.innerWidth <= 600){
        cambiarDisenio();
    }
}