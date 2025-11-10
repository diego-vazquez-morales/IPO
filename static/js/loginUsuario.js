/* loginUsuario.js
   Script de interacción para loginUsuario.html
*/

document.addEventListener('DOMContentLoaded', function() {
  console.log('loginUsuario.js cargado');
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      // ejemplo: validar campos antes de enviar
      var username = form.querySelector('[name="username"]');
      var password = form.querySelector('[name="password"]');
      if (username && username.value.trim() === '') {
        e.preventDefault();
        alert('El usuario es requerido');
        username.focus();
      }
    });
  }
});
