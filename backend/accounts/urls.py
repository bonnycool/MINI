# In accounts/urls.py
from django.urls import path
from .views import admin_login, create_user, get_users,login_view,logout_view # Ensure both are imported


urlpatterns = [
    path('create-user/', create_user, name='create-user'),  # Ensure function is correctly referenced
    path('get-users/', get_users, name='get_users'),  # Import for retrieving all users
    path('login/', login_view, name='login'),  # Ensure the login endpoint is defined
    path('admin-login/', admin_login, name='admin-login'),  # URL for admin login
    path('logout/',logout_view, name='logout'),  # Correct mapping
   
]
