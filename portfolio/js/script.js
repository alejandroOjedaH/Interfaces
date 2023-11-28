window.onload = () =>{
    let btWork =document.getElementById("work");
    let btAbout =document.getElementById("about");
    let btContact =document.getElementById("contact");
    let work =document.getElementById("trabajo");
    let about =document.getElementById("sobre");
    let contact =document.getElementById("contacto");

    function ocultar() {
        work.classList.add("invisible");
        about.classList.add("invisible");
        contact.classList.add("invisible");

        btWork.classList.remove("seleccionado");
        btAbout.classList.remove("seleccionado");
        btContact.classList.remove("seleccionado");
    }

    btWork.onclick = () => {
        ocultar();
        work.classList.remove("invisible");
        btWork.classList.add("seleccionado");
    }

    btAbout.onclick = () => {
        ocultar();
        about.classList.remove("invisible");
        btAbout.classList.add("seleccionado");
    }

    btContact.onclick = () => {
        ocultar();
        contact.classList.remove("invisible");
        btContact.classList.add("seleccionado");
    }
}