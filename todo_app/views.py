from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import TodoSerializer, LabelSerializer      
from .models import Todo, Label

# Create your views here.

class TodoView(viewsets.ModelViewSet):       
  serializer_class = TodoSerializer          
  queryset = Todo.objects.all()

class LabelView(viewsets.ModelViewSet):
    serializer_class = LabelSerializer
    queryset = Label.objects.all()
