from flask import Flask, render_template, request

# Crear la aplicación Flask
app = Flask(__name__)


@app.route('/')
def inicioAplicacion():
    """Ruta raíz: mostrar la pantalla de inicio de la aplicación."""
    return render_template('inicioAplicación.html')





@app.route('/confirmacionTarea')
def confirmacionTarea():
    return render_template('confirmaciónTarea.html')


@app.route('/crearUsuario')
def crearUsuario():
    return render_template('crearUsuario.html')


@app.route('/inicioUsuario')
def inicioUsuario():
    return render_template('inicioUsuario.html')


@app.route('/loginUsuario')
def loginUsuario():
    return render_template('loginUsuario.html')


@app.route('/misViajes')
def misViajes():
    return render_template('misViajes.html')


@app.route('/PreferenciasNotificaciones')
def preferenciasNotificaciones():
    return render_template('PreferenciasNotificaciones.html')


@app.route('/verRutas')
def verRutas():
    return render_template('verRutas.html')


@app.route('/ViajesDetalles')
def viajesDetalles():
    viaje_id = request.args.get('id')
    return render_template('ViajesDetalles.html', viaje_id=viaje_id)

@app.route('/MisRutas')
def misRutas():
    return render_template('MisRutas.html')

@app.route('/salir')
def salir():
    return render_template('salir.html')


# Punto de entrada
if __name__ == '__main__':
    app.run(debug=True)