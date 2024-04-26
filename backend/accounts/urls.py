# In accounts/urls.py
from django.urls import path
from .views import create_user, get_users,login_view  # Ensure both are imported

urlpatterns = [
    path('create-user/', create_user, name='create-user'),  # Ensure function is correctly referenced
    path('get-users/', get_users, name='get_users'),  # Import for retrieving all users
    path('login/', login_view, name='login'),  # Ensure the login endpoint is defined
]
