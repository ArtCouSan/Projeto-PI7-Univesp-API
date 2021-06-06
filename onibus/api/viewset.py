from rest_framework import viewsets
from onibus.api import serializers
from onibus import models
from django_filters.rest_framework import DjangoFilterBackend

class OnibusViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.OnibusSerializer
    queryset = models.Onibus.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['status', 'uf', 'placa']