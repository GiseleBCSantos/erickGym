from django.contrib import admin
from django.urls import path
from .views import ListaExercicioView

urlpatterns = [
    path('api', ListaExercicioView.as_view()),
    path('api', ListaExercicioView.as_view()),
    path('api/obter/<int:pk>', ListaExercicioView.as_view()),
    path('api/modificar/<int:pk>', ListaExercicioView.as_view()),
    path('api/deletar/<int:pk>', ListaExercicioView.as_view()),
]