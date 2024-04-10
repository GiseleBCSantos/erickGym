from django.urls import path
from .views import SignUpAPIView, MeAPIView
from rest_framework.authtoken.views import ObtainAuthToken

urlpatterns = [
    path('auth/signup', SignUpAPIView.as_view()),
    path('auth/signin', ObtainAuthToken.as_view()),
    path('auth/me', MeAPIView.as_view())
]