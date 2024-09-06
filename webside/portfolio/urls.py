from django.urls import path
from .views import proyectos_lista


app_name = "portfolio"
urlpatterns = [
    path('', proyectos_lista, name='proyectos_lista'),
]