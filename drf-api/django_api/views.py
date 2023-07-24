from django.shortcuts import render
from .models import API
from rest_framework.generics import ListAPIView, RetrieveAPIView,ListCreateAPIView,RetrieveUpdateAPIView,RetrieveUpdateDestroyAPIView
from .serializers import APISerializer
# Create your views here.

# class ThingListView(ListAPIView):
class APIListView(ListCreateAPIView):

    queryset = API.objects.all()
    serializer_class = APISerializer


class APIDetailView(RetrieveUpdateDestroyAPIView):
    queryset = API.objects.all()
    serializer_class = APISerializer

