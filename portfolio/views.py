from django.shortcuts import render
from .models import Proyectos
from rest_framework import viewsets
from .serializers import ProyectoSerializer

def proyectos_lista(request):
    estado = request.GET.get('estado', None)
    if estado and estado in dict(Proyectos.ESTADO_CHOICES).keys():
        proyectos = Proyectos.objects.filter(estado=estado)
    else:
        proyectos = Proyectos.objects.all()
    
    return render(request, 'proyectos_lista.html', {'proyectos': proyectos})


class ProyectoViewSet(viewsets.ModelViewSet):
    queryset = Proyectos.objects.all()
    serializer_class = ProyectoSerializer