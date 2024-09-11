from django.urls import path
from lisandro.views import Home, About, Curriculum

app_name = "lisandro"
urlpatterns = [
    path('',Home,name="home"),
    path('about',About, name="about"),
    path('curriculum',Curriculum, name="curriculum"),
]