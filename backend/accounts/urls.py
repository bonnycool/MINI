from django.urls import path
from .views import admin_login, create_user, get_profile, get_users, logout_view
from .decorator import role_required

urlpatterns = [
    path('create-user/', role_required(required_role='admin')(create_user), name='create-user'),
    path('get-users/', role_required(required_role='admin')(get_users), name='get_users'),
    path('admin-login/', admin_login, name='admin-login'),
    path('logout/', logout_view, name='logout'),
    path('get-profile/', role_required(required_role='user')(get_profile), name='get_profile'),
]