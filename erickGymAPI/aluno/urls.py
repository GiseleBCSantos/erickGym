from django.urls import path
from django.contrib import admin
from .views import ListCreateAlunoView, DeleteUpdateDetailAlunoView

urlpatterns = [
    path('alunos', ListCreateAlunoView.as_view()),
    path('alunos/<int:pk>', DeleteUpdateDetailAlunoView.as_view()),
    
]