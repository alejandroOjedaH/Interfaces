window.onload = () =>{
    establecerSesion();
    establecerTiempo();
}

function establecerTiempo(){
    const reloj = document.getElementById("eta");
}
function establecerSesion(){
    if(sessionStorage.getItem("supervivientes") === null){
        sessionStorage.setItem("supervivientes","90");
    }
    if(sessionStorage.getItem("energia") === null){
        sessionStorage.setItem("energia","90");
    }
    if(sessionStorage.getItem("integridad") === null){
        sessionStorage.setItem("integridad",["90"]);
    }
    if(sessionStorage.getItem("misiles") === null){
        sessionStorage.setItem("misiles","10");
    }
    if(sessionStorage.getItem("tripilacion") === null){
        sessionStorage.setItem("tripulacion",[]);
    }
}


function mostrarEscudoInterface() {
    ocultarTodasLasInterfaces();
    document.getElementById("shield-interface").style.display = "block";
}

function mostrarPropulsorInterface() {
    ocultarTodasLasInterfaces();
    document.getElementById("propulsor-interface").style.display = "block";
}

function mostrarArmaInterface() {
    ocultarTodasLasInterfaces();
    document.getElementById("arma-interface").style.display = "block";
}

function mostrarTripulacionInterface() {
    ocultarTodasLasInterfaces();
    document.getElementById("tripulacion-interface").style.display = "block";
}

function mostrarMotorSaltoInterface() {
    ocultarTodasLasInterfaces();
    document.getElementById("motor-salto-interface").style.display = "block";
}

function ocultarTodasLasInterfaces() {
    document.getElementById("shield-interface").style.display = "none";
    document.getElementById("propulsor-interface").style.display = "none";
    document.getElementById("arma-interface").style.display = "none";
    document.getElementById("tripulacion-interface").style.display = "none";
    document.getElementById("motor-salto-interface").style.display = "none";
}