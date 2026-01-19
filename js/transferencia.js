// creamos una funcion para capturar el valor ingresado + fecha 
/*funcion similar al depostio, mayor diferencia
- valdiar que saldo a enviar no sea amyor al saldo que presenta
- realizar la resta del dinero
- push para guardar y actualizar
- mensaje cambia a monto enviado o nuevo saldo*/

//logica para agregar los contactos nuevos
$(document).ready(function () {

    // 1. SELECTORES
    const inputContacto = $('#nombreContacto');
    const inpuntRut = $('#rutContacto');
    const inputBanco = $('#nombreBanco');
    const inputMail = $('#idContacto');
    const inputAlias = $('#aliasContacto');
    const btnSave = $('#subContacto');
    const inputBusqueda = $('#searchContact');

    // 2. FILTRADO (Se mantiene igual, funciona bien)
    inputBusqueda.on('keyup', function () {
        const valorBusqueda = $(this).val().toLowerCase();
        $('#listaContactos label').each(function () {
            const textoContacto = $(this).text().toLowerCase();
            if (textoContacto.indexOf(valorBusqueda) > -1) {
                $(this).addClass('d-flex').show();
            } else {
                $(this).removeClass('d-flex').hide();
            }
        });
    });

    // 3. EVENTO GUARDAR CONTACTO
    btnSave.on('click', function (e) {
        e.preventDefault();

        // Validación básica (Inconsistencia prevenida: no guardar vacíos)
        if (inputContacto.val().trim() === "") {
            alert("El nombre es obligatorio");
            return;
        }

        const nuevoContacto = {
            nombre: inputContacto.val(),
            rut: inpuntRut.val(),
            banco: inputBanco.val(),
            mail: inputMail.val(),
            alias: inputAlias.val(),
        };

        let contactos = JSON.parse(localStorage.getItem('contactosGuardados')) || [];
        contactos.push(nuevoContacto);
        localStorage.setItem('contactosGuardados', JSON.stringify(contactos));

        // Limpiar campos
        inputContacto.val('');
        inpuntRut.val('');
        inputBanco.val('');
        inputMail.val('');
        inputAlias.val('');
        inputBusqueda.val(''); // Limpiamos buscador para ver el nuevo contacto

        mostrarContactos();

        // Cerrar el offcanvas automáticamente
        const offcanvas = bootstrap.Offcanvas.getInstance($('#offcanvasContacto')[0]);
        if (offcanvas) offcanvas.hide();
    });

    // 4. MOSTRAR CONTACTOS
    function mostrarContactos() {
        const listaContenedor = $('#listaContactos');
        const contactos = JSON.parse(localStorage.getItem('contactosGuardados')) || [];

        listaContenedor.empty();

        if (contactos.length === 0) {
            listaContenedor.append('<p class="text-center text-muted p-4">Aún no tienes contactos guardados.</p>');
            return;
        }

        contactos.forEach((contacto, index) => {
            const inicial = contacto.nombre.charAt(0).toUpperCase();

           const item = $(`
    <label class="list-group-item d-flex align-items-center justify-content-between p-3 mb-2 border-0 shadow-sm contacto-card" 
           style="cursor: pointer; background-color: #f8f9fa; transition: all 0.3s ease; border-radius: 12px;">
        
        <div class="d-flex align-items-center">
            <div class="form-check me-3">
                <input class="form-check-input" type="radio" name="contactoParaTransferir">
            </div>
            
            <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3 shadow-sm" 
                 style="width: 45px; height: 45px; font-weight: bold; color: white;">
                ${inicial}
            </div>
            
            <div>
                <h6 class="mb-0 fw-bold text-dark">${contacto.nombre}</h6>
                <small class="text-secondary">${contacto.alias || contacto.mail}</small>
            </div>
        </div>

        <button class="btn btn-danger btn-sm rounded-circle shadow-sm btn-eliminar" 
                style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; z-index: 10;" 
                title="Eliminar contacto">
            <i class="bi bi-trash3-fill" style="font-size: 0.9rem;"> - </i>
        </button>
    </label>
`);

            item.on('click', function () {
                prepararTransferencia(contacto);
                const modalTransf = new bootstrap.Modal($('#modalTransf')[0]);
                modalTransf.show();
            });

            item.find('.btn-eliminar').on('click', function (e) {
                e.stopPropagation();
                if (confirm(`¿Estás seguro de que deseas eliminar a ${contacto.nombre}?`)) {
                    eliminarContacto(index);
                }
            });

            listaContenedor.append(item);
        });

        // Corregir Inconsistencia 1: Aplicar el filtro si había algo escrito
        inputBusqueda.trigger('keyup');
    }

    function eliminarContacto(index) {
        let contactos = JSON.parse(localStorage.getItem('contactosGuardados')) || [];
        contactos.splice(index, 1);
        localStorage.setItem('contactosGuardados', JSON.stringify(contactos));
        mostrarContactos();
    }

    function prepararTransferencia(contacto) {
        $('#infoNombre').val(contacto.nombre);
        $('#infoRut').val(contacto.rut || 'No registrado');
        $('#infoBanco').val(contacto.banco || 'No registrado');
    }

    // 5. CONFIRMAR TRANSFERENCIA
    $('#btnConfirmarTransf').on('click', function () {
        const montoInput = $('#montoTransferir');
        const monto = parseFloat(montoInput.val());
        const nombreDestinatario = $('#infoNombre').val(); // Capturamos el nombre

        let walletData = JSON.parse(localStorage.getItem('alekWalletData')) || { saldo: 0, movimientos: [] };

        // Validaciones
        if (isNaN(monto) || monto <= 0) {
            alert("Ingresa un monto válido");
            return;
        }
        if (monto > walletData.saldo) {
            $('#errorMonto').removeClass('d-none');
            montoInput.addClass('is-invalid');
            return;
        }

        // --- PROCESO DE DINERO ---
        walletData.saldo -= monto;
        walletData.movimientos.push({
            tipo: 'Transferencia Enviada',
            destinatario: nombreDestinatario,
            monto: monto,
            fecha: new Date().toLocaleString()
        });
        localStorage.setItem('alekWalletData', JSON.stringify(walletData));

        // --- PREPARAR MODAL DE ÉXITO ---
        // Llenamos la info en el modal de éxito
        $('#exitoNombre').text(nombreDestinatario);
        $('#exitoMonto').text(`- $${monto.toLocaleString()}`); // Aquí sale en negativo

        // Cerrar modal de confirmación
        const modalConfirmacion = bootstrap.Modal.getInstance($('#modalTransf')[0]);
        modalConfirmacion.hide();

        // Mostrar modal de éxito
        const modalExito = new bootstrap.Modal($('#modalExito')[0]);
        modalExito.show();

    });

    // 6. LIMPIEZA GLOBAL (Punto 5 del usuario)
    $(document).on('hidden.bs.modal', function () {
        $('.modal-backdrop').remove();
        $('body').css('overflow', 'auto').removeClass('modal-open');
    });

    mostrarContactos();
});