//logica del login

/* validar credenciales - mostrar mensaje alert
si son incorrectas */

//credenciales
const username = "fabian";
const password = "admin";
const boton = document.getElementById('check');
let mail = document.getElementById('mail');
let pass = document.getElementById('pass');

//funcion del btn mostrar contraseña
document.getElementById('check').addEventListener('click', function() {
    alert('mostrar contraseña');
})

//validacion de credenciales
document.getElementById('login').addEventListener('click',function validar(mail, pass){
    if(mail === username && pass === password) {
       alert('ingresaste') 
    }else {
        alert('no ingresaste')
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