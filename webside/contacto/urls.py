from django.urls import path
from contacto.views import Contacto


app_name = "contacto"
urlpatterns = [
    path('',Contacto,name="contacto"),
]