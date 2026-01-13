//logica de menu principal

/*agregar evento a los botones principales, 
al hacer click, debe aparecer una leyenda diciendo:
"redirigiendo a x" */
const btnDeposito = document.getElementById('deposit');
const btnMenu = document.getElementById('home');
const btnTransaccion = document.getElementById('transactions');
const btnEvDinero = document.getElementById('sendmoney');


//funcion para boton de rederigir
btnDeposito.addEventListener('click', function redirigir(event) {
    event.preventDefault();

    const rediG = document.getElementById('redirigiendo');
    rediG.textContent = "Redirigiendo a depositar..";


    const modal = new bootstrap.Modal(document.getElementById('modalRedireccion'));
    modal.show();

    setTimeout(function () {
        window.location.href = 'deposit.html';
    }, 1000);
});

btnMenu.addEventListener('click', function redirigir(event) {
event.preventDefault();
    const rediG = document.getElementById('redirigiendo');
    rediG.textContent = "Redirigiendo a Menu Principal..";

    const modal = new bootstrap.Modal(document.getElementById('modalRedireccion'));
    modal.show();

    setTimeout(function () {
        window.location.href = 'menu.html';
    }, 1000);
});

btnTransaccion.addEventListener('click', function redirigir(event) {
    event.preventDefault();
     const rediG = document.getElementById('redirigiendo');
    rediG.textContent = "Redirigiendo a Transacciones..";

    const modal = new bootstrap.Modal(document.getElementById('modalRedireccion'));
    modal.show();

    setTimeout(function () {
        window.location.href = 'transactions.html';
    }, 1000);
});

btnEvDinero.addEventListener('click', function redirigir(event) {
event.preventDefault();
     const rediG = document.getElementById('redirigiendo');
    rediG.textContent = "Redirigiendo a Enviar Dinero..";

    const modal = new bootstrap.Modal(document.getElementById('modalRedireccion'));
    modal.show();

    setTimeout(function () {
        window.location.href = 'sendmoney.html';
    }, 1000);
});

