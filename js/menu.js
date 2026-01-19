$(document).ready(function () {
    // instanciar el modal
    const modalElement = $('#modalRedireccion')[0];
    const modal = modalElement ? new bootstrap.Modal(modalElement) : null;
    const rediG = $('#redirigiendo');

    //funcion mostrar saldo
    function mostrarSaldo() {
        const datos = JSON.parse(localStorage.getItem('alekWalletData'));
        const displaySaldo = $('#saldo'); 

        if (datos && datos.saldo !== undefined) {
            displaySaldo.text(`$${datos.saldo.toLocaleString()}`);
        } else {
            displaySaldo.text("$0");
        }
    }

    // EJECUTAR AL CARGAR
    mostrarSaldo();

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
