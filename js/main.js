//logica del login

/* validar credenciales - mostrar mensaje alert
si son incorrectas */

//credenciales
const username = "fabian@gmail.com";
const password = "admin";
const boton = document.getElementById('check');
let mailInput = document.getElementById('mail');
let passInput = document.getElementById('pass');

//funcion del btn mostrar contraseña
document.getElementById('check').addEventListener('click', function() {
    if(passInput.type === "password") {
        passInput.type = "text";
    }else {
        passInput.type = "password";
    }
})

//validacion de credenciales
document.getElementById('login').addEventListener('click',function validar(event){
    //detiene la recarga de pagina que provoca el input submit
    event.preventDefault();
    //busca capturar la informacion al hacer el click
    const mailValue = mailInput.value;
    const passValue = passInput.value;
   
    if(mailValue === username && passValue === password) {
       window.location.replace('menu.html');
    }else {
        alert('no ingresaste')
        passInput.value = "";
    }
})

//logica de menu principal

/*agregar evento a los botones principales, 
al hacer click, debe aparecer una leyenda diciendo:
"redirigiendo a x" */







//logica de deposito

/* agregar evento al btn realizar deposito
- actualizar el saldo con el monto depositado */

//logica de enviar dinero

/*evento al boton de agregar nuevo contacto
- abrir formulario emergente para agregar contacto
- seleccionar contacto
- hacer click en enviar dinero y mostrar mensaje de
 confirmacion, monto, y que actualice el saldo */

// logica de ultimos movimientos

/* 
- mostrar lista de movimientos realizados, con los detalles

 */
