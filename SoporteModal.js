document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("ModalSop");
    var form = document.getElementById("formulario-soporte");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        if (form.checkValidity()) { 
            modal.style.display = "block";
            form.reset();
        } else {
            form.reportValidity(); 
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


