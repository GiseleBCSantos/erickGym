from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404
from .models import Exercicio
from .serializer import ExercicioSerializer

# Create your views here.

class ListaExercicioView(APIView):
    def get(self, request, pk=0):
        if pk == 0:
            exercicios = Exercicio.objects.all()
            serializer = ExercicioSerializer(exercicios, many=True)
            return Response(serializer.data)
        else:
            exercicio = Exercicio.objects.get(pk=pk)
            serializer = ExercicioSerializer(exercicio)
            return Response(serializer.data, status=200)
    
    def get_object(self, pk):
        try:
            return Exercicio.objects.get(pk=pk)
        except Exercicio.DoesNotExist:
            raise Http404

    
    def post(self, request):
        serializer = ExercicioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status = 404)


    def put(self, request, pk):
        exercicio = self.get_object(pk)
        serializer = ExercicioSerializer(exercicio, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, pk):
        exercicio = self.get_object(pk)
        exercicio.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)