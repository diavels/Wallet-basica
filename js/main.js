//logica del login
$(document).ready(function () {
    const boton = $('#check');
    const mailInput = $('#mail');
    const passInput = $('#pass');
    const errorDiv = $('#error-container');

    // Función para mostrar/ocultar contraseña
    boton.click(function () {
        const type = passInput.attr('type') === "password" ? "text" : "password";
        passInput.attr('type', type);
    });

    
    // Validación de credenciales
$('#login').submit(function (event) {
    event.preventDefault();

    const mailValue = mailInput.val();
    const passValue = passInput.val();

    // 1. Obtener la LISTA de usuarios
    const datosGuardados = localStorage.getItem('usuarios');

    if (datosGuardados) {
        // 2. Convertir a Array de objetos
        const listaUsuarios = JSON.parse(datosGuardados);

        // 3. BUSCAR si existe un usuario que coincida con mail y password
        // El método .find() devuelve el objeto si lo encuentra, o undefined si no.
        const usuarioEncontrado = listaUsuarios.find(u => u.email === mailValue && u.password === passValue);

        if (usuarioEncontrado) {
            // Éxito: Guardamos el nombre en el session para saludarlo en el menú
            sessionStorage.setItem('usuarioActivo', usuarioEncontrado.nombre);
            window.location.replace('menu.html');
        } else {
            mostrarError();
        }
    } else {
        mostrarError();
    }
});

    function mostrarError() {
        const alerta = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error:</strong> Credenciales incorrectas.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        errorDiv.html(alerta);
        passInput.val('');
    }
});

