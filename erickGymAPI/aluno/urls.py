from django.urls import path
from django.contrib import admin
from .views import ListCreateAlunoView, DeleteUpdateDetailAlunoView

urlpatterns = [
    path('aluno', ListCreateAlunoView.as_view()),
    path('aluno/<int:pk>', DeleteUpdateDetailAlunoView.as_view()),
    
]