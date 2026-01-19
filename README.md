# Wallet-basica

Una aplicación de billetera (wallet) muy simple construida con HTML, CSS y JavaScript puros. Está pensada como una demo o punto de partida para aprender conceptos básicos de UI y manejo de transacciones en el navegador.

---

## Resumen rápido

- Tipo: Aplicación cliente (front-end) estática
- Tecnologías: HTML, CSS, JavaScript (sin framework)
- Propósito: Registrar usuarios, depositar fondos, enviar dinero y ver transacciones (demo)
- Ejecutar: Abrir `index.html` en un navegador moderno

---

## Qué encontré en el repositorio

He analizado la estructura del repositorio y los archivos disponibles (metadatos y nombre de archivos). Con base en los nombres y convenciones habituales, esto es lo que corresponde a cada archivo/directorio:

- `index.html` — Página principal / login o panel de bienvenida.
- `menu.html` — Menú o navegación principal de la aplicación.
- `registrar.html` — Formulario de registro de usuario / creación de cuenta.
- `deposit.html` — Interfaz para realizar depósitos a la cuenta.
- `sendmoney.html` — Interfaz para enviar dinero a otra cuenta o usuario.
- `transactions.html` — Vista/listado de transacciones realizadas.
- `css/` — Directorio para hojas de estilo (vacío o con estilos externos).
- `js/` — Directorio para scripts JavaScript (vacío o con archivos de script).
- `img/` — Carpeta para imágenes y recursos estáticos (vacía o con imágenes).

Nota: No se encontró (en la metadata consultada) un backend ni configuración de servidor — la app parece ser totalmente del lado del cliente.

---

## Requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari).
- (Opcional) Node.js si desea servir los archivos vía un servidor simple para evitar limitaciones CORS al probar.

---

## Instalación / Ejecutar localmente

1. Clonar el repositorio:
   - `git clone https://github.com/diavels/Wallet-basica.git`
2. Abrir la carpeta del proyecto:
   - `cd Wallet-basica`
3. Ejecutar:
   - Opción rápida: Abrir `index.html` en su navegador (doble clic o arrastrar al navegador).
   - Opción con servidor (recomendado para desarrollo):
     - Con Python 3: `python -m http.server 8000`
     - Con Node (http-server): `npx http-server . -p 8000`
     - Abrir: `http://localhost:8000/`

---

## Uso (flujo esperado)

1. Registrar una nueva cuenta en `registrar.html`.
2. Iniciar sesión o navegar a `menu.html` / `index.html` según la UI.
3. Realizar depósitos desde `deposit.html`.
4. Enviar dinero a otra cuenta desde `sendmoney.html`.
5. Revisar el historial de transacciones en `transactions.html`.

(El flujo exacto puede variar según la lógica implementada en los scripts JS ligados a cada página.)

---

## Suposiciones y observaciones de seguridad

- Al ser una aplicación estática sin backend, cualquier persistencia de datos (si existe) muy probablemente usa localStorage o variables en memoria. Esto significa:
  - Los datos no son persistentes entre dispositivos.
  - No es apropiado para fondos reales ni datos sensibles.
- No hay autenticación segura ni cifrado en una app puramente front-end.
- Recomendaciones:
  - Implementar un backend con API segura (HTTPS) y almacenamiento en servidor.
  - Añadir validación robusta de entradas en front-end y back-end.
  - Manejar sesiones con tokens seguros y expiración.
  - Evitar almacenar datos sensibles en localStorage.

---

## Sugerencias de mejora / Roadmap

Prioridades para evolucionar el proyecto:

1. Crear un backend (Node.js/Express, Flask, etc.) con endpoints:
   - POST /register, POST /login
   - POST /deposit, POST /transfer
   - GET /transactions
   - Usar base de datos (SQLite, Postgres, MongoDB)
2. Autenticación con JWT o sesiones seguras.
3. Validación y saneamiento de inputs en servidor.
4. Interfaz responsiva y accesible (mejorar CSS).
5. Tests unitarios y end-to-end.
6. Manejo de errores y mensajes claros al usuario.
7. Internacionalización si se desea soporte multi-idioma.
8. Documentación adicional para desarrolladores y pruebas.

---

## Estructura de archivos sugerida (mejorar organización)

- / (raíz)
  - index.html
  - menu.html
  - registrar.html
  - deposit.html
  - sendmoney.html
  - transactions.html
  - css/
    - styles.css
  - js/
    - main.js
    - auth.js
    - wallet.js
  - img/
----

