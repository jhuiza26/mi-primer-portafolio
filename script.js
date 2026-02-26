const boton = document.getElementById("btn-toogle");
const descripcion = document.getElementById("descripcion");

boton.addEventListener("click", () => {
    descripcion.classList.toggle("oculto");

    if (descripcion.classList.contains("oculto")) {
        
        boton.textContent = "Mostrar información";
    } else {
        boton.textContent = "Ocultar información"
    }
});


const themeBtn = document.getElementById("theme-btn");

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")){
            themeBtn.textContent = "☀️ Modo Claro";

        } else {
            themeBtn.textContent = "🌙 Modo Oscuro";
        }
    });
