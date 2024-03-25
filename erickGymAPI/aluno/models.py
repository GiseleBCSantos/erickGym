from django.db import models

# Create your models here.

class Aluno(models.Model):


    nome = models.CharField(max_length=50, blank=False, null=False)
    foto = models.ImageField(upload_to='foto-aluno/', blank=True, null=True)
    sexo = models.CharField(max_length=1,blank=False, null=False)
    data_nascimento = models.DateField(blank=False, null=False)
    telefone = models.IntegerField(blank=False, null=False)
    cpf = models.IntegerField(blank=False, null=False)

    def __str__(self) -> str:
        return self.nome