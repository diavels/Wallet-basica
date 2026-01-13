const btnGuardar = document.getElementById('guardarDinero');
const input = document.getElementById('inDinero');

//logica de deposito

/* agregar evento al btn realizar deposito
- actualizar el saldo con el monto depositado */

// creamos una funcion para capturar el valor ingresado + fecha 
/*la funcion de click debe contener
- prevent default para evitar recarga
- condicional para errores con valores negativos
- creacion de localstorage
- funcion de suma+ actualizacion de valor*/

btnGuardar.addEventListener('click', function (event) {
    event.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('modalResultado'));
    //valores sean numericos y no se comporten como text
    const monto = parseFloat(input.value);

    if (monto <= 0) {
        alert("monto no valido para transaccion");
        return;
    }
    // 2. Obtener datos actuales de localStorage o crear nuevos si no existen
    let datos = JSON.parse(localStorage.getItem('alekWalletData')) || {
        saldo: 0,
        movimientos: []
    };

    // 3. Actualizar el saldo y el historial
    datos.saldo += monto;

    const nuevoMovimiento = {
        tipo: 'Depósito',
        monto: monto,
        fecha: new Date().toLocaleString(),
    };

    //funcio nde agregar el valor a json
    datos.movimientos.push(nuevoMovimiento);

    // 4. Guardar de nuevo en localStorage
    localStorage.setItem('alekWalletData', JSON.stringify(datos));

    //Feedback visual con modal
    document.getElementById('mensajeModal').innerText = `Depósito de $${monto} realizado correctamente.`;
    document.getElementById('nuevoSaldoModal').innerText = `Tu nuevo saldo es: $${datos.saldo}`;

    modal.show();
    // Limpiar el input
    inputMonto.value = '';
    
});

//mostrar el saldo en pantalla de menu
con



