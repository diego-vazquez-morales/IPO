/* alertas.js - lógica simple para la vista de Avisos y Notificaciones */

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('alertsList');
  const detail = document.getElementById('alertDetail');
  const detailTitle = document.getElementById('detailTitle');
  const detailDesc = document.getElementById('detailDesc');
  const removeBtn = document.getElementById('removeAlertBtn');
  let selectedCard = null;
  if (!list) return;

  // Ejemplo: marcar como "nuevo" el primer aviso durante 5s para llamar la atención.
  const first = list.querySelector('.alert-card');
  if (first) {
    first.dataset.state = 'new';
    setTimeout(() => { delete first.dataset.state; }, 5000);
  }

  // Accesibilidad: permitir navegación con teclas y foco visual.
  list.querySelectorAll('.alert-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        toggleDetail(card);
      }
      if (e.key === ' ' || e.key === 'Spacebar') { // soporte barra espaciadora
        e.preventDefault();
        toggleDetail(card);
      }
    });

    // Click para mostrar detalle
    card.addEventListener('click', () => toggleDetail(card));
  });

  function toggleDetail(card) {
    // Si ya está seleccionada, deseleccionar y ocultar panel
    if (selectedCard === card) {
      card.classList.remove('selected');
      selectedCard = null;
      detail?.classList.add('hidden');
      return;
    }
    // Seleccionar nueva tarjeta
    list.querySelectorAll('.alert-card.selected').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedCard = card;

    const type = card.dataset.type || card.querySelector('h2')?.textContent?.trim() || 'Aviso';
    const desc = card.dataset.description || card.querySelector('p')?.textContent?.trim() || '';

    if (detailTitle) detailTitle.textContent = type;
    if (detailDesc) detailDesc.textContent = desc;
    if (detail) detail.classList.remove('hidden');
    detailTitle?.setAttribute('tabindex', '-1');
    detailTitle?.focus({ preventScroll: false });
  }

  // Eliminar aviso seleccionado
  removeBtn?.addEventListener('click', () => {
    if (!selectedCard) return;
    // Eliminar del DOM
    selectedCard.remove();
    selectedCard = null;
    // Ocultar panel de detalle si ya no hay selección
    detail?.classList.add('hidden');
    // Si no quedan avisos, podríamos mostrar un mensaje opcional
    if (!list.querySelector('.alert-card')) {
      const empty = document.createElement('p');
      empty.className = 'text-sm text-gray-600 dark:text-gray-300';
      empty.textContent = 'No hay avisos disponibles.';
      list.appendChild(empty);
    }
  });
});

window.tailwind = window.tailwind || {};
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0D47A1", // Navy blue base
        "primary-light": "#1976D2",
        "background-light": "#F8F9FA",
        "background-dark": "#121212",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E1E1E",
        "text-light": "#212529",
        "text-dark": "#E0E0E0",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
}
