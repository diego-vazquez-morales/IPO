/* misViajes.js
   Script de interacción para misViajes.html
*/

document.addEventListener('DOMContentLoaded', function() {
  console.log('misViajes.js cargado');
  // ejemplo: marcar item seleccionado
  document.querySelectorAll('.viaje-item').forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelectorAll('.viaje-item').forEach(function(i){ i.classList.remove('selected'); });
      item.classList.add('selected');
    });
  });
});
