from django.contrib import admin
from .models import Participacion

# Register your models here.
@admin.register(Participacion)
class ParticipacionAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'intervenciones', 'descripcion')
    search_fields = ('nombre', 'intervenciones')