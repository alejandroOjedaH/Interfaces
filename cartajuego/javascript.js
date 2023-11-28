window.onload = () =>{
    cartaAnterior=null;
    clicks=parseInt(0);
    const tablero = document.getElementById("juego");
    let puntuacion = document.getElementById("puntuacion");
    puntuacion.innerHTML = clicks;
    
    randomizador();
    setearEventos();

    function randomizador(){
        let cadena = "";
        let c0 = 0 ,c1 = 0, c2=0, c3=0, c4=0, c5=0, c=0;

        while(c0 <2 || c1 <2 || c2<2 || c3<2 || c4<2 || c5<2 || c<2){
            let aleatorio = parseInt(Math.random()*6);
            if(aleatorio == 0 && c0 <2){
                cadena += "<div class=\"carta\"><div class=\"liliana frontal\"></div><div class=\"trasera\"></div></div>";
                c0++;
            }else if(aleatorio == 1 && c1 <2){
                cadena += "<div class=\"carta\"><div class=\"emrakul frontal\"></div><div class=\"trasera\"></div></div>";
                c1++;
            }else if(aleatorio == 2 && c2 <2){
                cadena += "<div class=\"carta\"><div class=\"decimodoctor frontal\"></div><div class=\"trasera\"></div></div>";
                c2++;
            }else if(aleatorio == 3 && c3 <2){
                cadena += "<div class=\"carta\"><div class=\"counterspell frontal\"></div><div class=\"trasera\"></div></div>";
                c3++;
            }else if(aleatorio == 4 && c4 <2){
                cadena += "<div class=\"carta\"><div class=\"montananevada frontal\"></div><div class=\"trasera\"></div></div>";
                c4++;
            }else if(aleatorio == 5 && c5 <2){
                cadena += "<div class=\"carta\"><div class=\"ira frontal\"></div><div class=\"trasera\"></div></div>";
                c5++;
            }
            c++;
        }  
        tablero.innerHTML = cadena;
    }
    function setearEventos(){
        let cartas =document.getElementsByClassName("carta");
        for (let i = 0; i < cartas.length; i++) {
            const carta = cartas[i];
            
            carta.onclick= seleccionarCarta;
        }
    }
    
    function seleccionarCarta(evento){
        let cartaActual = evento.target;
        cartaActual.classList.add("seleccionada");
        clicks++;
        puntuacion.innerHTML = clicks;
        if(cartaAnterior === null){
            cartaAnterior = cartaActual;
        }else{
            let tipoCartaActual = cartaActual.getElementsByClassName("frontal")[0].classList[0];
            let tipoCartaAnterior = cartaAnterior.getElementsByClassName("frontal")[0].classList[0];
            let cartas =document.getElementsByClassName("carta");
            for (let index = 0; index < cartas.length; index++) {
                const carta = cartas[index];
                carta.classList.add("notocar");
            }
            if(tipoCartaActual !== tipoCartaAnterior){
                setTimeout(() => {
                    cartaAnterior.classList.remove("seleccionada");
                    cartaActual.classList.remove("seleccionada");
                    cartaAnterior = null;
                    for (let index = 0; index < cartas.length; index++) {
                        const carta = cartas[index];
                        carta.classList.remove("notocar");
                    }
                }, 1000);
            }else{
                cartaAnterior = null; 
                for (let index = 0; index < cartas.length; index++) {
                    const carta = cartas[index];
                    carta.classList.remove("notocar");
                }
            } 
        }
    }
}