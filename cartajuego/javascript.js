window.onload = () =>{
    const tablero = document.getElementById("juego");
    
    randomizador();

    function randomizador(){
        let cadena = "";
        let c0 = 0 ,c1 = 0, c2=0, c3=0, c4=0, c5=0, c=0;

        while(c0 <2 || c1 <2 || c2<2 || c3<2 || c4<2 || c5<2 || c<2){
            let aleatorio = parseInt(Math.random()*6);
            if(aleatorio == 0 && c0 <2){
                cadena += "<div class=\"carta lilianaid\"><div class=\"trasera\"></div></div>";
                c0++;
            }else if(aleatorio == 1 && c1 <2){
                cadena += "<div class=\"carta emrakulid\"><div class=\"trasera\"></div></div>";
                c1++;
            }else if(aleatorio == 2 && c2 <2){
                cadena += "<div class=\"carta decimodoctorid\"><div class=\"trasera\"></div></div>";
                c2++;
            }else if(aleatorio == 3 && c3 <2){
                cadena += "<div class=\"carta counterspellid\"><div class=\"trasera\"></div></div>";
                c3++;
            }else if(aleatorio == 4 && c4 <2){
                cadena += "<div class=\"carta montananevada\"><div class=\"trasera\"></div></div>";
                c4++;
            }else if(aleatorio == 5 && c5 <2){
                cadena += "<div class=\"carta iraid\"><div class=\"trasera\"></div></div>";
                c5++;
            }
            c++;
        }  
        tablero.innerHTML = cadena;
    }
}