from rest_framework.serializers import ModelSerializer
from .models import Aluno
from autenticacao.serializer import UserSerializer, UserBasicSerializer

class AlunoSerializer(ModelSerializer):
    usuario = UserBasicSerializer(read_only=True)
    class Meta:
        model = Aluno
        fields = ['id', 'nome','usuario', 'sexo', 'data_nascimento', 'telefone', 'cpf']