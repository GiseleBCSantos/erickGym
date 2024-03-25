from django.shortcuts import render
from .models import Aluno
from rest_framework.response import Response
from django.http import Http404
from rest_framework.views import APIView
from .serializer import AlunoSerializer

# Create your views here.

class AlunoView(APIView):
    def get(self, request, pk=0):
        if pk == 0:
            aluno = Aluno.objects.all()
            serializer = AlunoSerializer(aluno, many=True)
            return Response(serializer.data, status=200)
        else:
            aluno = Aluno.objects.get(pk=pk)
            serializer = AlunoSerializer(aluno)
            return Response(serializer.data, status=200)
    

    def get_object(self, pk):
        try:
            return Aluno.objects.get(pk=pk)
        except Aluno.DoesNotExist:
            return Http404
        
    
    def post(self, request):
        serializer = AlunoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)
    

    def put(self, request, pk):
        aluno = self.get_object(pk)
        serializer = AlunoSerializer(aluno, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        
    
    def delete(self, request, pk):
        aluno = self.get_object(pk)
        aluno.delete()
        return Response(status=204)