from rest_framework import serializers
from onibus import models

class OnibusSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Onibus
        fields = '__all__'