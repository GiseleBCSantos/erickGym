from django.contrib import admin
from django.urls import path
from .views import ListCreateExercicioView, DeleteUpdateDetailExercicioView

urlpatterns = [
    path('exercicio', ListCreateExercicioView.as_view()),
    path('exercicio/<int:pk>', DeleteUpdateDetailExercicioView.as_view()),
]