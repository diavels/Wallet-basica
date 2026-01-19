$(document).ready(function () {
    // 1. INSTANCIAR MODAL Y ELEMENTOS (Una sola vez)
    const modalElement = $('#modalRedireccion')[0];
    const modal = modalElement ? new bootstrap.Modal(modalElement) : null;
    const rediG = $('#redirigiendo');

    // 2. FUNCIÓN PARA MOSTRAR SALDO
    function mostrarSaldo() {
        const datos = JSON.parse(localStorage.getItem('alekWalletData'));
        const displaySaldo = $('#saldo'); // Selector jQuery

        if (datos && datos.saldo !== undefined) {
            displaySaldo.text(`$${datos.saldo.toLocaleString()}`);
        } else {
            displaySaldo.text("$0");
        }
    }

    // EJECUTAR AL CARGAR
    mostrarSaldo();

    // 3. LÓGICA DE REDIRECCIÓN UNIFICADA
    // Seleccionamos todos los botones que tengan un ID de navegación
    $('#deposit, #home, #transactions, #sendmoney').click(function (event) {
        event.preventDefault();
        
        const destino = $(this).attr('href'); // Obtiene el destino del atributo href del HTML
        const textoBotón = $(this).text().trim(); // Obtiene el nombre del botón

        rediG.text(`Redirigiendo a ${textoBotón}...`);
        
        if (modal) modal.show();

        setTimeout(function () {
            window.location.href = destino;
        }, 1000);
    });
});
