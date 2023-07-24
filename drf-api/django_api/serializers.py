
from rest_framework import serializers
from .models import API

class APISerializer(serializers.ModelSerializer):
    class Meta:
        model =  API
        fields =['id','reviewer', 'name', 'desc']
        # fields = '__all__'
