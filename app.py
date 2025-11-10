
from flask import Flask, render_template, request, redirect, url_for, abort, session


@app.route('/')
def inicioAplicacion():
    return render_template('inicioAplicacion.html')

@app.route('/confirmacionTarea')
def confirmacionTarea():
    return render_template('confirmacionTarea.html')

