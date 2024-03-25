from django.db import models

# Create your models here.

class Exercicio(models.Model):
    nome = models.CharField(max_length=50)
    descricao = models.CharField(max_length=200)
    ativo = models.BooleanField(default=True)
    em_aparelho = models.BooleanField(default=True)
    idade_minima = models.PositiveIntegerField(default=12)

    def __str__(self) -> str:
        return self.nome