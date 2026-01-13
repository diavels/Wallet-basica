// creamos una funcion para capturar el valor ingresado + fecha 
/*funcion similar al depostio, mayor diferencia
- valdiar que saldo a enviar no sea amyor al saldo que presenta
- realizar la resta del dinero
- push para guardar y actualizar
- mensaje cambia a monto enviado o nuevo saldo*/
btnGuardar.addEventListener('click', function (event){
    event.preventDefault();
    
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
            id: Date.now() // ID único para control
        };
        
        //funcio nde agregar el valor a json
        datos.movimientos.push(nuevoMovimiento);

        // 4. Guardar de nuevo en localStorage
        localStorage.setItem('alekWalletData', JSON.stringify(datos));

        // 5. Feedback visual (Opcional: usar el modal que tienes en tu HTML)
        console.log("Transferencia exitosa:", nuevoMovimiento);
        alert(`¡Envio de dinero realizado! Tu nuevo saldo es: $${datos.saldo}`);

        // Limpiar el input
        inputMonto.value = '';
});