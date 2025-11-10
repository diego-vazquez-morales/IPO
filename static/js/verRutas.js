/* verRutas.js
   Script para verRutas.html
*/

document.addEventListener('DOMContentLoaded', function() {
  console.log('verRutas.js cargado');
  var userSelect = document.getElementById('user-select');
  if (userSelect) {
    userSelect.addEventListener('change', function(){
      // reenviar la página con el usuario seleccionado (si el template no lo hace con JS)
      var u = userSelect.value;
      if (u) {
        window.location.search = 'user=' + encodeURIComponent(u);
      }
    });
  }
});
