//logica del login
$(document).ready(function () {
    /* validar credenciales - mostrar mensaje alert
si son incorrectas */
    //credenciales
    const username = "fabian@gmail.com";
    const password = "admin";
    const boton = $('#check');
    const mailInput = $('#mail');
    const passInput = $('#pass');

    //funcion del btn mostrar contraseña
    boton.click(function () {

        if (passInput.attr('type') === "password") {
            passInput.attr('type', 'text');
        } else {
            passInput.attr('type', 'password');
        }
    });

    //validacion de credenciales
    $('#login').submit(function (event) {
        //detiene la recarga de pagina que provoca el input submit
        event.preventDefault();
        //busca capturar la informacion al hacer el click
        const mailValue = mailInput.val();
        const passValue = passInput.val();
        const errorDiv = $('#error-container')

        if (mailValue === username && passValue === password) {
            window.location.replace('menu.html');
        } else {
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
})


/*logica con jquery*/

