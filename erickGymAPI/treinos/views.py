from .models import Exercicio
from .serializer import ExercicioSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

# Create your views here.

class ListCreateExercicioView(ListCreateAPIView):
    queryset = Exercicio
    serializer_class = ExercicioSerializer
        


class DeleteUpdateDetailExercicioView(RetrieveUpdateDestroyAPIView):
    queryset = Exercicio
    serializer_class = ExercicioSerializer