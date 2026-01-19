$(document).ready(function () {
    $('#registroForm').on('submit', function (e) {
        e.preventDefault();

        const usuario = {
            nombre: $('#nombre').val(),
            rut: $('#rut').val(),
            email: $('#email').val(),
            banco: $('#banco').val(),
            fechaNacimiento: $('#fechaNacimiento').val(),
            password: $('#password').val()
        };

        // Guardar en LocalStorage
        let usuariosPrevios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuariosPrevios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosPrevios));

        // --- Lógica del Modal ---
        // 1. Instanciar el modal de Bootstrap
        const myModal = new bootstrap.Modal(document.getElementById('successModal'));
        
        // 2. Mostrar el modal
        myModal.show();

        // 3. Redirigir a login
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 2500);

        this.reset(); 
    });
});