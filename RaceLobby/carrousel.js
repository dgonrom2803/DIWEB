  
function onIniciar() {
}
  // CODIGO DEL CARROUSEL
    // seleccionamos el nodo con clase carrousel__grande
    const divCarrouselGrande = document.querySelector(".carrousel__grande");
    // debemos añadir una funcionalidad click a los botones... tenemos que seleccionar TODOS los botones
    const botones = document.querySelectorAll(".botones__boton");

    // Una vez seleccionados los nodos, añadimos el eventListener a TODOS LOS BOTONES
    botones.forEach((boton, i)=>{

      boton.addEventListener("click", ()=>{
        console.log(`Se ha pulsado el boton nº ${i} :)`)

        // Quitamos la clase css activo a TODOS LOS BOTONES
        botones.forEach((botonQuitar)=>{
            botonQuitar.classList.remove("activo")
        });
        // para acto seguido, añadirsela al boton AL QUE SE LE HA HECHO CLICK
        boton.classList.add("activo")

        let calculoPx = i * -50;
        console.log(`Click en ${i}: calculo= ${calculoPx}`)

        divCarrouselGrande.style.transform = `translateX(${calculoPx}%)`;
      })
      

    });




window.onload = onIniciar();