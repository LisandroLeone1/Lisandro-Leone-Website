from django.shortcuts import render, redirect
from contacto.forms import FormularioContacto
from django.core.mail import send_mail

def Contacto(request):
    mensaje_exito = ''
    if request.method == 'POST':
        formulario = FormularioContacto(request.POST)
        if formulario.is_valid():
            nombre = formulario.cleaned_data['nombre']
            apellido = formulario.cleaned_data['apellido']
            email = formulario.cleaned_data['email']
            mensaje = formulario.cleaned_data['mensaje']

            asunto = 'Nuevo mensaje de contacto'
            cuerpo = f'Nombre: {nombre} {apellido}\nEmail: {email}\nMensaje:\n{mensaje}'

            send_mail(
                asunto,
                cuerpo,
                email,  
                ['leonelisandro@gmail.com'],  
                fail_silently=False,
            )

            mensaje_exito = '¡Tu mensaje se ha enviado correctamente!'
            formulario = FormularioContacto()  # Limpia el formulario después de enviar
    else:
        formulario = FormularioContacto()

    return render(request, 'contacto/contacto.html', {'Formulario': formulario, 'mensaje_exito': mensaje_exito})