/* loginUsuario.js
   Script de interacción para loginUsuario.html
*/

document.addEventListener('DOMContentLoaded', function () {
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
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0f49bd',
        'background-light': '#f6f7f8',
        'background-dark': '#101922'
      },
      fontFamily: {
        display: ['Inter', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      }
    }
  }
}
