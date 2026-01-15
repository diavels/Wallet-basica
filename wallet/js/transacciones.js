function cargarTransacciones() {
    const tabla = document.getElementById('tablaMovimientos');
    // Obtenemos los datos o un objeto vacío si no hay nada
    const walletData = JSON.parse(localStorage.getItem('alekWalletData')) || { movimientos: [] };
    const movimientos = walletData.movimientos;

    tabla.innerHTML = '';

    if (movimientos.length === 0) {
        tabla.innerHTML = '<tr><td colspan="4" class="text-center p-4 text-muted">No hay registros aún.</td></tr>';
        return;
    }

    // Recorremos los movimientos (usamos reverse para ver el más reciente primero)
    movimientos.reverse().forEach(mov => {
        // Determinamos el color y el símbolo según el tipo
        const esIngreso = mov.tipo === 'Depósito' || mov.tipo === 'Depósito Rápido';
        const colorClase = esIngreso ? 'text-success' : 'text-danger';
        const simbolo = esIngreso ? '+' : '-';

        const fila = `
            <tr>
                <td class="ps-4 small text-muted">${mov.fecha}</td>
                <td>
                    <span class="badge ${esIngreso ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'} rounded-pill">
                        ${mov.tipo}
                    </span>
                </td>
                <td><span class="fw-medium">${mov.destinatario || 'Billetera Personal'}</span></td>
                <td class="text-end pe-4 fw-bold ${colorClase}">
                    ${simbolo} $${mov.monto.toLocaleString()}
                </td>
            </tr>
        `;
        tabla.insertAdjacentHTML('beforeend', fila);
    });
}
//muestra los movimientos
document.addEventListener('DOMContentLoaded', cargarTransacciones);