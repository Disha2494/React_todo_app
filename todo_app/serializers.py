# added serializers to convert model instances to JSON so that the frontend can work with the received data easily

from rest_framework import serializers
from .models import Todo, Label

class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = '__all__'

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo                                         # specified the model to work 
        fields = '__all__'                                   # adding fields we want to be converted to JSON.

