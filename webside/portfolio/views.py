from django.shortcuts import render
from .models import Proyectos

def proyectos_lista(request):
    estado = request.GET.get('estado', None)
    if estado and estado in dict(Proyectos.ESTADO_CHOICES).keys():
        proyectos = Proyectos.objects.filter(estado=estado)
    else:
        proyectos = Proyectos.objects.all()
    
    return render(request, 'proyectos_lista.html', {'proyectos': proyectos})
