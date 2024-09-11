from django.shortcuts import render

def Home(request):
    return render(request,"lisandro/index.html")

def About(request):
    return render(request,"lisandro/about_me.html")

def Curriculum(request):
    return render(request,"lisandro/cv.html")