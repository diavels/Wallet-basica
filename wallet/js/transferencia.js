// creamos una funcion para capturar el valor ingresado + fecha 
/*funcion similar al depostio, mayor diferencia
- valdiar que saldo a enviar no sea amyor al saldo que presenta
- realizar la resta del dinero
- push para guardar y actualizar
- mensaje cambia a monto enviado o nuevo saldo*/

//logica para agregar los contactos nuevos

const inputContacto = document.getElementById('nombreContacto');
const inputMail = document.getElementById('idContacto');
const inputAlias = document.getElementById('aliasContacto');
const btnSave = document.getElementById('subContacto');

btnSave.addEventListener('click', function (e) {
    e.preventDefault();

    const nuevoContacto = {
        nombre: inputContacto.value,
        mail: inputMail.value,
        alias: inputAlias.value,
    };

    let contactos = JSON.parse(localStorage.getItem('contactosGuardados')) || []

    contactos.push(nuevoContacto);

    localStorage.setItem('contactosGuardados', JSON.stringify(contactos));

    inputContacto.value = '';
    inputMail.value = '';
    inputAlias.value = '';

    // 7. Actualizar la lista en pantalla inmediatamente
});
//logica para mostrar los contactos nuevos
function mostrarContactos() {
    const listaContenedor = document.getElementById('listaContactos');
    const contactos = JSON.parse(localStorage.getItem('contactosGuardados')) || [];

    // Limpiamos el contenedor para no duplicar datos
    listaContenedor.innerHTML = '';

    contactos.forEach(contacto => {
        const inicial = contacto.nombre.charAt(0).toUpperCase();
        
        // Creamos el diseño estilizado con Bootstrap
        listaContenedor.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <div class="card contacto-card shadow-sm w-100 p-3 mb-3 text-center" style="border-radius: 15px; cursor: pointer;">
                    <div class="card-body">
                        <div class="rounded-circle bg-primary text-white mx-auto d-flex align-items-center justify-content-center mb-3" style="width: 50px; height: 50px; font-size: 1.2rem;">
                            ${inicial}
                        </div>
                        <h5 class="fw-bold mb-0">${contacto.nombre}</h5>
                        <small class="text-muted d-block mb-2">${contacto.mail}</small>
                        ${contacto.alias ? `<span class="badge bg-info-subtle text-info rounded-pill">${contacto.alias}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    });
}
// Llamamos a mostrarContactos al cargar la página para ver los que ya existen
document.addEventListener('DOMContentLoaded', mostrarContactos);



//logica de enviar dinero
/*
btnGuardar.addEventListener('click', function (event) {
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
});*/