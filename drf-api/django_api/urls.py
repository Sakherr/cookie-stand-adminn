from django.urls import path
from .views import APIListView, APIDetailView

urlpatterns = [
   
    path('', APIListView.as_view(), name= 'api_list'),
    path('<int:pk>/',APIDetailView.as_view(), name= 'api_detail')
]