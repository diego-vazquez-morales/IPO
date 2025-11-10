/* ViajesDetalles.js
   Script para ViajesDetalles.html
*/

function getQueryParam(name) {
  var params = new URLSearchParams(window.location.search);
  return params.get(name);
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('ViajesDetalles.js cargado');
  var viajeId = getQueryParam('id');
  if (viajeId) {
    console.log('Mostrando detalles para viaje id=', viajeId);
    // ejemplo: podrías cargar detalles via fetch
    // fetch('/api/viajes/' + viajeId).then(...)
  }
});
