from django.contrib import admin
from .models import Exercicio

# Register your models here.

@admin.register(Exercicio)
class ExercicioAdmin(admin.ModelAdmin):
    list_display = ['nome', 'ativo']
    
