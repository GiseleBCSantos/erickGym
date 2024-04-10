from django.shortcuts import render
from .models import Aluno
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from rest_framework.views import APIView
from .serializer import AlunoSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ListCreateAlunoView(ListCreateAPIView):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
       serializer.save(usuario=self.request.user)


class DeleteUpdateDetailAlunoView(RetrieveUpdateDestroyAPIView):
    queryset = Aluno
    serializer_class = AlunoSerializer
    permisson_classes = [IsAuthenticated]

    def get_object(self):
        user = self.request.user
        obj = super().get_object()
        if obj.usuario == user:
            return obj
        raise Http404
