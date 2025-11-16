from flask import Flask, render_template, request

# Crear la aplicación Flask
app = Flask(__name__)


@app.route('/')
def home():
    """Ruta raíz: mostrar la pantalla de inicio de la aplicación."""
    return render_template('home.html')





@app.route('/confirmacionTarea')
def confirmacionTarea():
    return render_template('confirmaciónTarea.html')


@app.route('/crearUsuario')
def crearUsuario():
    return render_template('crearUsuario.html')


@app.route('/homeUsuario')
def home_usuario():
    return render_template('homeUsuario.html')


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/misViajes')
def misViajes():
    return render_template('MisViajes.html')


@app.route('/Viajes')
def viajes():
    return render_template('Viajes.html')


@app.route('/PreferenciasNotificaciones')
def preferenciasNotificaciones():
    return render_template('PreferenciasNotificaciones.html')


@app.route('/buscarRutas')
def buscarRutas():
    return render_template('buscarRutas.html')


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

@app.route('/configuracion')
def configuracion():
    return render_template('configuracion.html')

@app.route('/notificaciones')
def notificaciones():
    return render_template('notificaciones.html')

@app.route('/modal-demo')
def modal_demo():
    return render_template('modalDemo.html')


# Punto de entrada
if __name__ == '__main__':
    app.run(debug=True)