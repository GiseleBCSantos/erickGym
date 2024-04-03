from .models import Exercicio
from .serializer import ExercicioSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

# Create your views here.

class ListCreateExercicioView(ListCreateAPIView):
    queryset = Exercicio.objects.all()
    serializer_class = ExercicioSerializer
        


class DeleteUpdateDetailExercicioView(RetrieveUpdateDestroyAPIView):
    queryset = Exercicio.objects.all()
    serializer_class = ExercicioSerializer