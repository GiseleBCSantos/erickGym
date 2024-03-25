from django.urls import path
from django.contrib import admin
from .views import AlunoView

urlpatterns = [
    path('api', AlunoView.as_view()),
    path('api', AlunoView.as_view()),
    path('api/obter/<int:pk>', AlunoView.as_view()),
    path('api/modificar/<int:pk>', AlunoView.as_view()),
    path('api/deletar/<int:pk>', AlunoView.as_view())
]