$(document).ready(function () {
    // Selectores de jQuery
    const btnGuardar = $('#guardarDinero');
    const input = $('#inDinero');

    btnGuardar.on('click', function (event) {
        event.preventDefault();

        // Instancia del modal (usando el elemento nativo [0])
        const modalElement = $('#modalResultado')[0];
        const modal = new bootstrap.Modal(modalElement);

        // Obtener valor numérico con jQuery
        const monto = parseFloat(input.val());

        // Validación
        if (isNaN(monto) || monto <= 0) {
            alert("Monto no válido para transacción");
            input.val(''); // Limpiar input si es inválido
            return;
        }

        // 2. Obtener datos actuales de localStorage o inicializar
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

        datos.movimientos.push(nuevoMovimiento);

        // 4. Guardar en localStorage
        localStorage.setItem('alekWalletData', JSON.stringify(datos));

        // Feedback visual
        $('#mensajeModal').text(`Depósito de $${monto.toLocaleString()} realizado correctamente.`);
        $('#nuevoSaldoModal').text(`Tu nuevo saldo es: $${datos.saldo.toLocaleString()}`);

        // Mostrar Modal
        modal.show();

        // Limpiar el input
        input.val('');
    });
});




