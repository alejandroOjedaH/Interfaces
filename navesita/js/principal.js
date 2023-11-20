let motorcont = 100;
let laserRecarga = 0;
window.onload= () =>{
    const reloj = document.getElementById("reloj");
    const motor = document.getElementById("jump-progress");
    const motorNumber = document.getElementById("jump-progress-number");
    const escudoProa = document.getElementById("proa-shield");
    const escudoPopa = document.getElementById("popa-shield");
    const escudoBabor = document.getElementById("babor-shield");
    const escudoEstribor= document.getElementById("estribor-shield");
    const velocidad = document.getElementById("speed-slider");
    const botonMasVelo = document.getElementById("sumarVel");
    const botonMenasVelo = document.getElementById("restarVel");
    const cambiarArmaBoton =document.getElementById("cambiarArma");
    const botonDisparar = document.getElementById("disparar");
    const botonRecargar =document.getElementById("recargarLase");
    const refrigerador = document.getElementById("refrigerar");
    const refrigeradorNumero = document.getElementById("refrigerar-number");
    const modalRecursos =document.getElementById("modalRecursos");
    const modalBatalla =document.getElementById("modalCombate");
    const ubicacion1 =document.getElementById("ubi1");
    const ubicacion2 =document.getElementById("ubi2");
    const ubicacion3 =document.getElementById("ubi3");
    const ubicacion4 =document.getElementById("ubi4");
    const tarjeta1 =document.getElementById("ubi1-panel");
    const tarjeta2 =document.getElementById("ubi2-panel");
    const tarjeta3 =document.getElementById("ubi3-panel");
    const botonRecursos =document.getElementById("recursosAceptar");
    const botonBatalla =document.getElementById("batallaAceptar");

    
    motor.value=motorcont;
    motorNumber.innerText=100;
    reloj.value="02:30"
    refrigerador.value = 0;
    refrigeradorNumero.innerText=0;
    
    seterarSesion();
    bajarReloj();
    setearRecursos();
    setearMotor();
    restarVelocidad();

    botonMasVelo.onclick = sumarVel;
    botonMenasVelo.onclick = restarVel;
    escudoProa.onchange = cambiarEscudos;
    escudoBabor.onchange = cambiarEscudos;
    escudoPopa.onchange = cambiarEscudos;
    escudoEstribor.onchange = cambiarEscudos;
    cambiarArmaBoton.onclick = cambiarArma;
    botonDisparar.onclick = disparar;
    botonRecargar.onclick =recargarLaser;
    refrigerador.onchange = modularRefrigerador;
    ubicacion1.onclick = () =>{mostrarTarjetas(1)};
    ubicacion3.onclick = () =>{mostrarTarjetas(3)};
    ubicacion2.onclick = () =>{mostrarTarjetas(2)};
    tarjeta1.onclick = mostrarRecursos;
    tarjeta2.onclick = mostrarBatalla;
    tarjeta3.onclick = mostrarRecursos;
    botonRecursos.onclick =aceptarRecursos;
    botonBatalla.onclick = aceptarBatalla;

    function aceptarRecursos(){
        modalRecursos.classList.remove("visible");
        modalRecursos.classList.add("invisible");
        sessionStorage.setItem("supervivientes", parseInt(sessionStorage.getItem("supervivientes"))+10);
        sessionStorage.setItem("energia", parseInt(sessionStorage.getItem("energia"))+10);
        sessionStorage.setItem("integridad", parseInt(sessionStorage.getItem("integridad"))+10);
        sessionStorage.setItem("misiles", parseInt(sessionStorage.getItem("misiles"))+2);
    }
    function mostrarRecursos(){
        modalRecursos.classList.remove("invisible");
        modalRecursos.classList.add("visible");
    }
    function aceptarBatalla(){
        modalBatalla.classList.remove("visible");
        modalBatalla.classList.add("invisible");
    }
    function mostrarBatalla(){
        modalBatalla.classList.remove("invisible");
        modalBatalla.classList.add("visible");
    }
    function modularRefrigerador(){
        refrigeradorNumero.innerText=refrigerador.value;
    }
    function recargarLaser(){
        laserRecarga = 0;
        botonDisparar.disabled=false;
    }
    function disparar(){
        const weapon1 =document.getElementById("weapon1");
        const weapon2 =document.getElementById("weapon2");

        if(weapon1.checked==true){
            if (laserRecarga<4) {
                sessionStorage.setItem("energia", sessionStorage.getItem("energia")-1);
                laserRecarga++
            }else{
                botonDisparar.disabled=true;
            }
        }else if(weapon2.checked==true){
            if(sessionStorage.getItem("misiles")>0){
                sessionStorage.setItem("misiles",sessionStorage.getItem("misiles")-1);
            }
        }
    }
    function cambiarArma(){
        const weapon1 =document.getElementById("weapon1");
        const weapon2 =document.getElementById("weapon2");

        if(weapon1.checked==true){
            weapon2.checked=true;
            botonDisparar.disabled=false;
        }else if(weapon2.checked==true){
            weapon1.checked=true;
            if (laserRecarga>=4) {
                botonDisparar.disabled=true;
            }
        }
    }
    function sumarVel(){
        if(velocidad.value<1000){
            velocidad.value=parseInt(velocidad.value)+100;
        }
    }
    function restarVel(){
        if(velocidad.value>0){
            velocidad.value=velocidad.value-100;
        }
    }
    function cambiarEscudos(event){
        let valorRestante = 100-event.target.value;
        valorRestante = valorRestante/3;
        if(event.target == escudoProa){
            escudoBabor.value=valorRestante;
            escudoPopa.value=valorRestante;
            escudoEstribor.value=valorRestante;
        } else if(event.target == escudoBabor){
            escudoProa.value=valorRestante;
            escudoPopa.value=valorRestante;
            escudoEstribor.value=valorRestante;
        }else if(event.target == escudoPopa){
            escudoProa.value=valorRestante;
            escudoBabor.value=valorRestante;
            escudoEstribor.value=valorRestante;
        }else if(event.target == escudoEstribor){
            escudoProa.value=valorRestante;
            escudoBabor.value=valorRestante;
            escudoPopa.value=valorRestante;
        }
        
    }
    function restarVelocidad(){  
        let restar = parseInt((velocidad/100)+(refrigerador.value));
        //sessionStorage.setItem("energia", sessionStorage.getItem("energia")-restar);

        let t = setTimeout(function(){ restarVelocidad() }, 1000);
    }
    function setearMotor(){
        const motorcapsule =document.getElementById("motor");
        if(motorcont>0 && refrigerador.value ==0){
            motorcont--;
        }else if(motorcont>0){
            motorcont = motorcont - refrigerador.value;
            if(motorcont<0){
                motorcont=0;
            }
        }
        motor.value=motorcont;
        motorNumber.innerText=motorcont;
        if(motorcont>=50){
            motorcapsule.style= " background-color: red";
        } else if(motorcont>=25){
            motorcapsule.style= " background-color: yellow";
        }else if(motorcont>=0){
            motorcapsule.style = " background-color: green";
        }
        let t = setTimeout(function(){ setearMotor() }, 1000);
    }

    function setearRecursos(){
        const survivorMeter = document.getElementById("survivor-meter");
        const survivorMeterNumber = document.getElementById("survivor-meter-number");
        const energyMeter = document.getElementById("energy-meter");
        const energyMeterNumber = document.getElementById("energy-meter-number");
        const damageMeter = document.getElementById("damage-meter");
        const damageMeterNumber = document.getElementById("damage-meter-number");
        const misilesMeter = document.getElementById("ammunition-meter");
        const misilesMeterNumber = document.getElementById("ammunition-meter-number");

        survivorMeter.value = sessionStorage.getItem("supervivientes");
        survivorMeterNumber.innerText = sessionStorage.getItem("supervivientes");
        if(sessionStorage.getItem("supervivientes")>=50){
            survivorMeter.style= " background-color: green";
        } else if(sessionStorage.getItem("supervivientes")>=25){
            survivorMeter.style= " background-color: yellow";
        }else if(sessionStorage.getItem("supervivientes")>=0){
            survivorMeter.style = " background-color: red";
        }

        energyMeter.value = sessionStorage.getItem("energia");
        energyMeterNumber.innerText = sessionStorage.getItem("energia");
        if(sessionStorage.getItem("energia")>=50){
            energyMeter.style = " background-color: green";
        } else if(sessionStorage.getItem("energia")>=25){
            energyMeter.style = " background-color: yellow";
        }else if(sessionStorage.getItem("energia")>=0){
            energyMeter.style = " background-color: red";
        }

        damageMeter.value = sessionStorage.getItem("integridad");
        damageMeterNumber.innerText = sessionStorage.getItem("integridad");
        if(sessionStorage.getItem("integridad")>=50){
            damageMeter.style= " background-color: green";
        } else if(sessionStorage.getItem("integridad")>=25){
            damageMeter.style = " background-color: yellow";
        }else if(sessionStorage.getItem("integridad")>=0){
            damageMeter.style = " background-color: red";
        }
        let t = setTimeout(function(){ setearRecursos() }, 1000);

        misilesMeter.value = sessionStorage.getItem("misiles");
        misilesMeterNumber.innerText = sessionStorage.getItem("misiles");
    }

    function bajarReloj(){
        const amarillo = document.getElementById("amarillo");
        const rojo = document.getElementById("rojo");
        let minutoSegundo = reloj.value.split(":");
        let minuto = parseInt(minutoSegundo[0]);
        let segundo = parseInt(minutoSegundo[1]);

        if(minuto == 0 && segundo == 0){

        } else if(segundo == 0){
            minuto--;
            segundo = 59;
        } else{
            segundo--;
            
        }
        minuto = ""+minuto;
        segundo =""+segundo;
        if(minuto.length==1){
            minuto ="0"+minuto;
        }
        if(segundo.length==1){
            segundo ="0"+segundo;
        }

        reloj.value = minuto+":"+segundo;
        if((segundo == "30" || segundo == "00") && (minuto != "00" || segundo != "00")){
            amarillo.classList.add("amarillo");
        }else if(minuto == "00" && segundo == "10"){
            rojo.classList.add("rojo");
        }else if(segundo == "15" || segundo == "45"){
            amarillo.classList.remove("amarillo");
            rojo.classList.remove("rojo");
        }
        let t = setTimeout(function(){ bajarReloj() }, 1000);
    }
    
    function seterarSesion(){
        if(sessionStorage.getItem("supervivientes") == null){
            sessionStorage.setItem("supervivientes", 90);
        }
        if(sessionStorage.getItem("energia") == null){
            sessionStorage.setItem("energia", 90);
        }
        if(sessionStorage.getItem("integridad") == null){
            sessionStorage.setItem("integridad", 90);
        }
        if(sessionStorage.getItem("tripulantes") == null){
            sessionStorage.setItem("tripulantes", []);
        }
        if(sessionStorage.getItem("misiles") == null){
            sessionStorage.setItem("misiles", 10);
        }
    }
    
    function mostrarTarjetas(id){
        const tarjeta =document.getElementById("ubi"+id+"-panel");
        if(tarjeta.style.transform!="scale(1, 1)"){
            tarjeta.style.transform="scale(1,1)";
            tarjeta.style.opacity="1";
        }else{
            tarjeta.style.transform="scale(1,0)";
            tarjeta.style.opacity="0";
        }
    }
}

function saltoEmergencia(){
    if (motorcont <= 0) {
        mostrarImagen("./img/warp.gif",4);
        sessionStorage.setItem("supervivientes", sessionStorage.getItem("supervivientes")-30);
        sessionStorage.setItem("energia", sessionStorage.getItem("energia")-30);
        sessionStorage.setItem("integridad", sessionStorage.getItem("integridad")-30);
    }
}

function mostrarImagen(ruta,segundos){
    const proyector = document.getElementById("proyector");
    proyector.style.backgroundImage = "url("+ruta+")";
    proyector.style.opacity = 1;
    setTimeout(function(){ proyector.style.opacity=0},segundos*1000);
}

function mostrarEscudoInterface() {
    ocultarTodasLasInterfaces();
    document.getElementById("shield-interface").classList.add("mostrarmenu");
}

function mostrarPropulsorInterface() {
    ocultarTodasLasInterfaces();
    document.getElementById("propulsor-interface").classList.add("mostrarmenu");
}

function mostrarArmaInterface() {
    ocultarTodasLasInterfaces();
    document.getElementById("arma-interface").classList.add("mostrarmenu");
}

function mostrarMotorSaltoInterface() {
    ocultarTodasLasInterfaces();
    document.getElementById("motor-salto-interface").classList.add("mostrarmenu");
}

function ocultarTodasLasInterfaces() {
    document.getElementById("shield-interface").classList.remove("mostrarmenu");
    document.getElementById("propulsor-interface").classList.remove("mostrarmenu");
    document.getElementById("arma-interface").classList.remove("mostrarmenu");
    document.getElementById("motor-salto-interface").classList.remove("mostrarmenu");
}