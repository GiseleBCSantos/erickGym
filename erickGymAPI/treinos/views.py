from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404
from .models import Exercicio
from .serializer import ExercicioSerializer

# Create your views here.

class ListCreateExercicioView(APIView):
    def get(self, request):
        exercicios = Exercicio.objects.all()
        serializer = ExercicioSerializer(exercicios, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ExercicioSerializer(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        


class DeleteUpdateDetailExercicioView(APIView):
    def get_object(self, pk):
        try:
            exercicio = Exercicio.objects.get(pk=pk)
            return exercicio
        except Exercicio.DoesNotExist:
            return Http404


    def get(self, request, pk):
        exercicio = self.get_object(pk)
        serializer = ExercicioSerializer(exercicio)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    def put(self, request, pk):
        exercicio = self.get_object(pk)
        serializer = ExercicioSerializer(exercicio, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, pk):
        exercicio = self.get_object(pk)
        exercicio.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)