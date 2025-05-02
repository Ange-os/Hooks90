from django.db import models

# Create your models here.

class Participacion(models.Model):
    TIPO_INTERVENCION = [
        ('mezcla y masterización', 'mezcla y masterización'),
        ('mezcla','mezcla'),
        ('masterización','masterización'),
        ('produccion', 'produccion'),
    ]
    nombre = models.CharField(max_length=50, unique=True)
    descripcion = models.CharField(max_length=200)
    foto = models.ImageField(upload_to='multimedia/', blank=True, null=True )
    intervenciones = models.CharField(max_length=50, choices=TIPO_INTERVENCION)

    def __str__(self):
        return f'{self.nombre} - {self.intervenciones}'