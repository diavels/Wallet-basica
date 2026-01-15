// creamos una funcion para capturar el valor ingresado + fecha 
/*funcion similar al depostio, mayor diferencia
- valdiar que saldo a enviar no sea amyor al saldo que presenta
- realizar la resta del dinero
- push para guardar y actualizar
- mensaje cambia a monto enviado o nuevo saldo*/

//logica para agregar los contactos nuevos

const inputContacto = document.getElementById('nombreContacto');
const inpuntRut = document.getElementById ('rutContacto')
const inputBanco = document.getElementById ('nombreBanco')
const inputMail = document.getElementById('idContacto');
const inputAlias = document.getElementById('aliasContacto');
const btnSave = document.getElementById('subContacto');

btnSave.addEventListener('click', function (e) {
    e.preventDefault();

    const nuevoContacto = {
        nombre: inputContacto.value,
        rut: inpuntRut.value,
        banco: inputBanco.value,
        mail: inputMail.value,
        alias: inputAlias.value,
    };

    let contactos = JSON.parse(localStorage.getItem('contactosGuardados')) || []

    contactos.push(nuevoContacto);

    localStorage.setItem('contactosGuardados', JSON.stringify(contactos));

    inputContacto.value = '';
    inpuntRut.value = '';
    inputBanco.value = '';
    inputMail.value = '';
    inputAlias.value = '';

    // 7. Actualizar la lista en pantalla inmediatamente
    mostrarContactos();

    
});
//logica para mostrar los contactos nuevos
function mostrarContactos() {
    const listaContenedor = document.getElementById('listaContactos');
    const contactos = JSON.parse(localStorage.getItem('contactosGuardados')) || [];

    listaContenedor.innerHTML = '';

    if (contactos.length === 0) {
        listaContenedor.innerHTML = '<p class="text-center text-muted p-4">Aún no tienes contactos guardados.</p>';
        return;
    }

    contactos.forEach(contacto => {
        const inicial = contacto.nombre.charAt(0).toUpperCase();
        
        // Crear el elemento manualmente para asignar el evento click de forma segura
        const label = document.createElement('label');
        label.className = "list-group-item d-flex align-items-center justify-content-between p-3";
        label.style.cursor = "pointer";
        
        label.innerHTML = `
            <div class="d-flex align-items-center">
                <div class="form-check me-3">
                    <input class="form-check-input" type="radio" name="contactoParaTransferir">
                </div>
                <div class="rounded-circle bg-light d-flex align-items-center justify-content-center me-3 border" style="width: 40px; height: 40px; font-weight: bold; color: #0d6efd;">
                    ${inicial}
                </div>
                <div>
                    <h6 class="mb-0 fw-bold">${contacto.nombre}</h6>
                    <small class="text-muted">${contacto.alias || contacto.mail}</small>
                </div>
            </div>
            <i class="bi bi-chevron-right text-secondary small"></i>
        `;

        // AL HACER CLIC: Se prepara el modal con ESTE contacto
        label.onclick = () => {
            prepararTransferencia(contacto);
            const modalTransf = new bootstrap.Modal(document.getElementById('modalTransf'));
            modalTransf.show();
        };

        listaContenedor.appendChild(label);
    });
}

//logica de enviar dinero

// Función para abrir el modal con los datos del contacto seleccionado
function prepararTransferencia(contacto) {
    // Rellenamos el modal con los datos del objeto 'contacto'
    document.getElementById('infoNombre').value = contacto.nombre;
    document.getElementById('infoRut').value = contacto.rut || 'No registrado';
    document.getElementById('infoBanco').value = contacto.banco || 'No registrado';
}

document.getElementById('btnConfirmarTransf').addEventListener('click', function() {
    const montoInput = document.getElementById('montoTransferir');
    const monto = parseFloat(montoInput.value);
    
    let walletData = JSON.parse(localStorage.getItem('alekWalletData')) || { saldo: 0, movimientos: [] };
    const errorMsg = document.getElementById('errorMonto');

    // Validaciones
    if (isNaN(monto) || monto <= 0) {
        alert("Ingresa un monto válido");
        return;
    }

    if (monto > walletData.saldo) {
        errorMsg.classList.remove('d-none');
        montoInput.classList.add('is-invalid');
        return;
    }

    // Ejecutar Transacción
    walletData.saldo -= monto;
    walletData.movimientos.push({
        tipo: 'Transferencia Enviada',
        destinatario: document.getElementById('infoNombre').value,
        monto: monto,
        fecha: new Date().toLocaleString()
    });

    localStorage.setItem('alekWalletData', JSON.stringify(walletData));

    // Feedback visual (Cerrar modal actual y mostrar el de redirección/éxito)
    bootstrap.Modal.getInstance(document.getElementById('modalTransf')).hide();
    
    const modalRedir = new bootstrap.Modal(document.getElementById('modalRedireccion'));
    modalRedir.show();

    // Simular redirección al Home después de 2 segundos
    setTimeout(() => {
        window.location.href = '/menu.html';
    }, 2000);
});

//muestra los contactos
document.addEventListener('DOMContentLoaded', mostrarContactos);

// Detectar cuando cualquier modal de la página se oculta
document.addEventListener('hidden.bs.modal', function () {
    // Elimina manualmente los backdrops sobrantes
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(b => b.remove());

    // Devuelve el scroll al cuerpo de la página
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-open');
});