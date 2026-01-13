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

// PARA MOSTRAR EL SALDO
// llama a la lista, luego recata el valor del saldo asociandolo a un id

function mostrarSaldo() {
    //llama la lista
    const datos = JSON.parse(localStorage.getItem('alekWalletData'));
    //asocia el id del saldo para mostrarlo dsp
    const displaySaldo = document.getElementById('saldo'); 
    
    //condicional en caso de que no tenga saldo
    if (datos && displaySaldo) {
        displaySaldo.textContent = `$${datos.saldo.toLocaleString()}`;
    } else if (displaySaldo) {
        displaySaldo.textContent = "$0";
    }
}
//sive para que el codigo se active dsp de que el dom este listo.
document.addEventListener('DOMContentLoaded', mostrarSaldo);

