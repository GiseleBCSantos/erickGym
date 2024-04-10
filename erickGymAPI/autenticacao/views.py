from django.shortcuts import render
from .serializer import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework import views
from rest_framework.response import Response
from rest_framework import permissions

# Create your views here.

class SignUpAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class MeAPIView(views.APIView):
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)