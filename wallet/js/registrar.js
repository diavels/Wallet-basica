$(document).ready(function () {
    $('#registroForm').on('submit', function (e) {
        e.preventDefault(); // Evita que la página se recargue

        // Capturar los valores con jQuery
        const usuario = {
            nombre: $('#nombre').val(),
            rut: $('#rut').val(),
            email: $('#email').val(),
            banco: $('#banco').val(),
            fechaNacimiento: $('#fechaNacimiento').val(),
            password: $('#password').val()
        };

        // Lógica de LocalStorage (esta parte se mantiene similar ya que es API nativa)
        let usuariosPrevios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuariosPrevios.push(usuario);
        
        localStorage.setItem('usuarios', JSON.stringify(usuariosPrevios));

        alert('Usuario registrado con éxito en LocalStorage');

        window.location.href = 'login.html'; // Cambia esto por el nombre de tu archivo

        // Limpiar el formulario
        // Nota: .reset() es un método de JS puro, por eso usamos [0] para obtener el elemento DOM
        this.reset(); 
        
    });
});