
from flask import Flask, render_template, request, redirect, url_for, abort, session

# Crear la aplicación Flask
app = Flask(__name__)

@app.route('/')
def inicioAplicacion():
    return render_template('inicioAplicacion.html')

@app.route('/confirmacionTarea')
def confirmacionTarea():
    return render_template('confirmacionTarea.html')


@app.route('/crearUsuario')
def crearUsuario():
    return render_template('crearUsuario.html')

@app.route('/inicioAplicacion')
def inicioAplicacion():
    return render_template('inicioAplicacion.html')

@app.route('/inicioUsuario')
def inicioUsuario():
    return render_template('inicioUsuario.html')    


@app.route('/loginUsuario')
def loginUsuario():
    """Ruta para mostrar la pantalla de login del usuario."""
    return render_template('loginUsuario.html')


@app.route('/misViajes')
def misViajes():
    """Ruta para mostrar los viajes del usuario."""
    return render_template('misViajes.html')


@app.route('/PreferenciasNotificaciones')
def preferenciasNotificaciones():
    """Ruta para mostrar las preferencias de notificaciones."""
    return render_template('PreferenciasNotificaciones.html')


@app.route('/verRutas')
def verRutas():
    """Ruta para mostrar las rutas disponibles/seleccionadas."""
    return render_template('verRutas.html')


@app.route('/ViajesDetalles')
def viajesDetalles():
    """Ruta para mostrar detalles de un viaje; acepta query param `id` opcional."""
    viaje_id = request.args.get('id')
    return render_template('ViajesDetalles.html')