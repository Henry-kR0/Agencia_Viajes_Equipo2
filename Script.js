// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");
    const usuarioInput = document.getElementById("usuario");
    const correoInput = document.getElementById("correo");
    const nivelSelect = document.getElementById("nivel");

    const errorUsuario = document.getElementById("error-usuario");
    const errorCorreo = document.getElementById("error-correo");
    const errorNivel = document.getElementById("error-nivel");

    // Escuchar el evento de envío (submit) del formulario
    form.addEventListener("submit", (e) => {
        // Prevenir que la página se recargue automáticamente
        e.preventDefault();

        // Variables de control para saber si el formulario es válido
        let formularioValido = true;

        // --- 1. VALIDACIÓN DEL USUARIO ---
        if (usuarioInput.value.trim() === "") {
            errorUsuario.textContent = "Por favor, ingrese su nombre 🦀";
            formularioValido = false;
        } else if (usuarioInput.value.trim().length < 3) {
            errorUsuario.textContent = "El nombre debe tener al menos 3 caracteres.";
            formularioValido = false;
        } else {
            errorUsuario.textContent = ""; // Limpiar error si pasa
        }

        // --- 2. VALIDACIÓN DEL CORREO ---
        // Expresión regular básica para validar estructura de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (correoInput.value.trim() === "") {
            errorCorreo.textContent = "El correo es obligatorio, inténtelo otra vez 🦐";
            formularioValido = false;
        } else if (!emailRegex.test(correoInput.value.trim())) {
            errorCorreo.textContent = "Por favor, ingrese un correo electrónico válido.";
            formularioValido = false;
        } else {
            errorCorreo.textContent = ""; // Limpiar error si pasa
        }

        // --- 3. VALIDACIÓN DEL SELECT (¿Cómo supo de nosotros?) ---
        if (nivelSelect.value === "Elija") {
            errorNivel.textContent = "Por favor, seleccione una opción válida.";
            formularioValido = false;
        } else {
            errorNivel.textContent = ""; // Limpiar error si pasa
        }

        // --- ENVÍO FINAL ---
        if (formularioValido) {
            alert(`¡Registro exitoso! 🎉\nBienvenido ${usuarioInput.value.trim()}. Pronto te enviaremos información sobre Los Chorros.`);
            
            // Opcional: Reiniciar el formulario después de enviar
            form.reset();
        }
    });
});
