from django.urls import path, include
from .views import proyectos_lista, ProyectoViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'proyectos', ProyectoViewSet, basename='proyectos')

app_name = "portfolio"
urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('', proyectos_lista, name='proyectos_lista'),
]