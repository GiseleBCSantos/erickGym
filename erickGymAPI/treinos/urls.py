from django.contrib import admin
from django.urls import path
from .views import ListCreateExercicioView, DeleteUpdateDetailExercicioView

urlpatterns = [
    path('exercicios', ListCreateExercicioView.as_view()),
    path('exercicios/<int:pk>', DeleteUpdateDetailExercicioView.as_view()),
]