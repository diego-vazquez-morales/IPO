# Sistema de Modales de Confirmación - TrainLife

Sistema completo de modales de confirmación reutilizable implementado en HTML/CSS/JavaScript vanilla.

## 📁 Archivos

- **`static/js/confirmModal.js`** - Lógica del modal
- **`static/styles/confirmModal.css`** - Estilos del modal
- **`templates/modalDemo.html`** - Página de demostración

## 🚀 Uso Básico

### 1. Incluir archivos en tu página HTML

```html
<!-- En el <head> -->
<link rel="stylesheet" href="{{ url_for('static', filename='styles/confirmModal.css') }}">
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Antes del </body> -->
<script src="{{ url_for('static', filename='js/confirmModal.js') }}"></script>
```

### 2. Mostrar un modal

```javascript
window.showConfirmModal({
    title: 'Título del modal',
    message: 'Mensaje descriptivo',
    confirmText: 'Confirmar',
    cancelText: 'Cancelar',
    type: 'warning', // 'danger', 'warning', 'info'
    onConfirm: () => {
        console.log('Usuario confirmó');
    },
    onCancel: () => {
        console.log('Usuario canceló');
    }
});
```

## 🎨 Tipos de Modales

### Danger (Peligro)
Para acciones destructivas como eliminar o cancelar permanentemente.

```javascript
window.showConfirmModal({
    title: '¿Eliminar ruta?',
    message: '¿Estás seguro? Esta acción no se puede deshacer.',
    confirmText: 'Eliminar',
    type: 'danger',
    onConfirm: () => { /* código */ }
});
```

**Características:**
- Icono rojo (AlertTriangle)
- Botón rojo (#dc2626)
- Fondo del icono rojo claro (#fee2e2)

### Warning (Advertencia)
Para acciones que requieren atención especial.

```javascript
window.showConfirmModal({
    title: 'Cambiar configuración',
    message: 'Esta acción afectará tus preferencias.',
    confirmText: 'Continuar',
    type: 'warning',
    onConfirm: () => { /* código */ }
});
```

**Características:**
- Icono amarillo/naranja (AlertTriangle)
- Botón naranja (#d97706)
- Fondo del icono amarillo (#fef3c7)

### Info (Información)
Para confirmaciones generales y acciones informativas.

```javascript
window.showConfirmModal({
    title: '¿Guardar cambios?',
    message: '¿Deseas guardar los cambios realizados?',
    confirmText: 'Guardar',
    type: 'info',
    onConfirm: () => { /* código */ }
});
```

**Características:**
- Icono azul (Info)
- Botón azul (#2563eb)
- Fondo del icono azul claro (#dbeafe)

## ⚙️ Opciones Disponibles

| Opción | Tipo | Predeterminado | Descripción |
|--------|------|----------------|-------------|
| `title` | string | 'Confirmar acción' | Título del modal |
| `message` | string | '¿Estás seguro...?' | Mensaje descriptivo |
| `confirmText` | string | 'Confirmar' | Texto del botón de confirmación |
| `cancelText` | string | 'Cancelar' | Texto del botón de cancelación |
| `type` | string | 'warning' | Tipo: 'danger', 'warning', 'info' |
| `onConfirm` | function | null | Callback al confirmar |
| `onCancel` | function | null | Callback al cancelar |

## 🔄 Uso con Async/Await

El modal retorna una Promise que se resuelve con `true` (confirmado) o `false` (cancelado):

```javascript
async function confirmarAccion() {
    const confirmed = await window.showConfirmModal({
        title: 'Confirmar',
        message: '¿Continuar con la acción?',
        type: 'info'
    });
    
    if (confirmed) {
        // Usuario confirmó
        console.log('Acción confirmada');
    } else {
        // Usuario canceló
        console.log('Acción cancelada');
    }
}
```

## 📱 Características

- ✅ **Responsive**: Se adapta a móviles y tablets
- ✅ **Accesible**: Soporte de teclado (Escape para cerrar)
- ✅ **Animado**: Transiciones suaves de entrada/salida
- ✅ **Click fuera**: Cierra al hacer clic en el overlay
- ✅ **Iconos Lucide**: Integración con Lucide Icons
- ✅ **Sin dependencias**: JavaScript vanilla puro
- ✅ **Bloqueo de scroll**: Previene scroll del body cuando está abierto
- ✅ **Instancia única**: Solo un modal abierto a la vez

## 🎯 Ejemplos de Uso en TrainLife

### Eliminar ruta guardada
```javascript
function eliminarRuta(rutaId, titulo) {
    window.showConfirmModal({
        title: '¿Eliminar ruta?',
        message: `¿Estás seguro de que deseas eliminar "${titulo}"?`,
        confirmText: 'Eliminar',
        type: 'danger',
        onConfirm: () => {
            // Eliminar del localStorage
            const rutas = JSON.parse(localStorage.getItem('misRutasGuardadas') || '[]');
            const filtradas = rutas.filter(r => r.id !== rutaId);
            localStorage.setItem('misRutasGuardadas', JSON.stringify(filtradas));
            
            // Actualizar UI
            renderizarRutas();
        }
    });
}
```

### Guardar configuración
```javascript
function guardarConfiguracion() {
    const datos = recopilarDatos();
    
    window.showConfirmModal({
        title: '¿Guardar cambios?',
        message: '¿Deseas guardar los cambios en tu configuración?',
        confirmText: 'Guardar',
        type: 'info',
        onConfirm: () => {
            localStorage.setItem('configuracion', JSON.stringify(datos));
            mostrarMensajeExito('Configuración guardada');
        }
    });
}
```

### Cancelar viaje
```javascript
function cancelarViaje(viajeId) {
    window.showConfirmModal({
        title: 'Cancelar viaje',
        message: 'Se aplicará una tarifa de cancelación. ¿Continuar?',
        confirmText: 'Sí, cancelar',
        cancelText: 'No, mantener',
        type: 'warning',
        onConfirm: () => {
            // Lógica de cancelación
            cancelarViajeBackend(viajeId);
        }
    });
}
```

## 🔍 Demo

Visita `/modal-demo` en tu aplicación Flask para ver todos los ejemplos en acción.

## 🎨 Personalización

Para personalizar los colores, modifica las variables en `confirmModal.css`:

```css
.modal-btn-danger {
    background-color: #dc2626; /* Rojo */
}

.modal-btn-warning {
    background-color: #d97706; /* Naranja */
}

.modal-btn-info {
    background-color: #2563eb; /* Azul */
}
```

## 📝 Notas Importantes

1. **Lucide Icons**: Asegúrate de incluir `lucide@latest` para que los iconos funcionen
2. **Orden de scripts**: Carga `confirmModal.js` antes de tus scripts personalizados
3. **Instancia global**: El modal está disponible como `window.confirmModal`
4. **Un modal a la vez**: Si se abre un nuevo modal, el anterior se cierra automáticamente

## ✨ Implementado en

- ✅ `configuracion.html` - Confirmar guardado de cambios
- ✅ `buscarRutas.html` - Confirmar eliminación de rutas guardadas
- ✅ `MisViajes.html` - Listo para usar
- ✅ `Viajes.html` - Listo para usar
- ✅ `notificaciones.html` - Listo para usar

## 🤝 Soporte

Para cualquier problema o pregunta sobre el sistema de modales, consulta la página de demostración en `/modal-demo`.
