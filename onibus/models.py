from django.db import models

# Create your models here.
class Onibus(models.Model):
    placa = models.CharField(primary_key=True, editable=True, max_length=10)
    estaLotado = models.BooleanField()
    dtAlteracao = models.DateTimeField(auto_now_add=True)
    qtnPassageirosAtual = models.IntegerField()
    status = models.CharField(max_length=10)
    uf = models.CharField(max_length=2)
    sentidoIda = models.CharField(max_length=255)
    sentidoVolta = models.CharField(max_length=255)
    identificacao = models.CharField(max_length=10)
    limite = models.IntegerField()
