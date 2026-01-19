$(document).ready(function() {
    // 1. Seleccionamos la tabla 
    const tabla = $('#tablaMovimientos');
    
    // 2. Obtenemos los datos del localStorage
    const datosGuardados = localStorage.getItem('alekWalletData');
    const walletData = JSON.parse(datosGuardados) || { movimientos: [] };
    const movimientos = walletData.movimientos;

    // 3. Limpiamos la tabla antes de llenarla
    tabla.empty();

    // 4. if para revisar si no hay movimientod y mostrar mensaje
    if (movimientos.length === 0) {
        tabla.append('<tr><td colspan="4" class="text-center p-4 text-muted">No hay registros aún.</td></tr>');
        return; 
    }

    // 5. Recorremos los movimientos
    // Usamos .reverse() para mostrar del mas reciente
    movimientos.reverse().forEach(function(mov) {
        
        // Determinamos si es entrada o salida de dinero
        const esIngreso = mov.tipo === 'Depósito' || mov.tipo === 'Depósito Rápido';
        const colorClase = esIngreso ? 'text-success' : 'text-danger';
        const simbolo = esIngreso ? '+' : '-';

        // Creamos la fila
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

        // 6. Agregamos la fila a la tabla
        tabla.append(fila);
    });
});