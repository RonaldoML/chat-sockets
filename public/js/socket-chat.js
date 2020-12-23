var socket = io();

var params = new URLSearchParams(window.location.search);

var nomb = document.querySelector('#nombre');
var sal = document.querySelector('#sala');

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw Error('El nombre y sala son necesarios!');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

nomb.innerText = params.get('nombre');
sal.innerText += ' ' + params.get('sala');

socket.on('connect', function () {

    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, (resp) => {
        console.log('Usuarios conectados', resp);
    });
});

// escuchar
socket.on('disconnect', function () {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('crearMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function (resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', function (mensaje) {

    console.log('Servidor:', mensaje);

});

//Escuchar cambios de usuarios
//Cuando un usuario entra o sale del chat
socket.on('listaPersonas', function (personas) {
    console.log(personas);
})

//Mebsajes privados
socket.on('mensajePrivado', function (mensaje) {
    console.log('Mensaje privado  '+mensaje.mensaje);
})