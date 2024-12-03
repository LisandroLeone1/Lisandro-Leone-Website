from django.db import models

class Proyectos(models.Model):
    ESTADO_CHOICES = [
        ('en_desarrollo', 'En Desarrollo'),
        ('terminado', 'Terminado'),
        ('pausado', 'Pausado'),
        ('cancelado', 'Cancelado'),
    ]

    nombre = models.CharField(max_length=200)
    fecha_inicio = models.DateField()
    fecha_finalizacion = models.DateField(null=True, blank=True)
    lenguajes = models.CharField(max_length=200, blank=True, null=True)
    categoria = models.CharField(max_length=20, blank=True, null=True)
    descripcion = models.CharField(max_length=3000, blank=True, null=True)
    imagen = models.ImageField(null=True,blank=True,upload_to='imgs')
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='en_desarrollo')
    url = models.URLField(max_length=200,null=True,blank=True)


    class Meta:
        verbose_name = 'Proyecto'
        verbose_name_plural = 'Proyectos'

    def __str__(self):
        return self.nombre
