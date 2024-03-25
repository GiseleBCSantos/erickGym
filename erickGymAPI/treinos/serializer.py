from rest_framework.serializers import ModelSerializer
from .models import Exercicio

class ExercicioSerializer(ModelSerializer):
    class Meta:
        model = Exercicio
        fields = ['id', 'nome', 'descricao', 'ativo', 'em_aparelho', 'idade_minima']