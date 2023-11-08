window.onload = () =>{
    const tablero = document.getElementById("juego");
    
    randomizador();

    function randomizador(){
        let cadena = "";
        let c0 = 0 ,c1 = 0, c2=0, c3=0, c4=0, c5=0, c=0;

        while(c<12){
            const aleatorio =Math.random*6;
            if(aleatorio == 0 && c0 <2){
                cadena += "<div class=\"carta\"><div id=\"liliana\"></div><div class=\"trasera\"></div></div>";
            }else if(aleatorio == 1 && c1 <2){
                cadena += "<div class=\"carta\"><div id=\"emrakul\"></div><div class=\"trasera\"></div></div>";
            }else if(aleatorio == 2 && c2 <2){
                cadena += "<div id=\"decimodoctor\"></div>";
            }else if(aleatorio == 3 && c3 <2){
                cadena += "<div id=\"counterspell\"></div>";
            }else if(aleatorio == 4 && c4 <2){
                cadena += "<div id=\"montananevada\"></div>";
            }else if(aleatorio == 5 && c5 <2){
                cadena += "<div id=\"ira\"></div>";
            }
            c++;
        }  
        tablero.innerHTML = cadena;
    }
}