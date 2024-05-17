document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("ModalSop");
    var form = document.getElementById("formulario-soporte");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío por defecto del formulario

        if (form.checkValidity()) { // Verifica si el formulario es válido
            modal.style.display = "block"; // Muestra el modal si el formulario es válido
        } else {
            form.reportValidity(); // Muestra los mensajes de error si el formulario no es válido
        }
    });

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});


