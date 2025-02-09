# account/urls.py
from django.urls import path
from .views import *
from .models import *
urlpatterns = [
    path('user/', user, name='user'),
    path('profile/', ProfileApiView.as_view(), name='profile-detail'),

    # path('register/', views.register_view, name='register'),
    # Add other views as necessary
]
