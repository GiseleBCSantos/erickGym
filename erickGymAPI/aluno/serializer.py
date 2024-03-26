from rest_framework.serializers import ModelSerializer
from .models import Aluno

class AlunoSerializer(ModelSerializer):
    class Meta:
        model = Aluno
        fields = ['id', 'nome', 'sexo', 'data_nascimento', 'telefone', 'cpf']