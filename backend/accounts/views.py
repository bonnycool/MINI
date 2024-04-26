# In accounts/views.py
from django.http import JsonResponse
from .models import UserCredentials  # Ensure this import works
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view

# Define the create_user function
def create_user(request):
    # Example logic to create a user
    UserCredentials.objects.create(username='test1_user', password='test_password')
    return JsonResponse({'message': 'User created successfully'})
def get_users(request):
    users = UserCredentials.objects.all()  # Retrieve all users
    users_list = [{'username': user.username, 'password': user.password} for user in users]
    return JsonResponse({'users': users_list})


@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # Authenticate by matching username and password
    try:
        user = UserCredentials.objects.get(username=username, password=password)
        return JsonResponse({"message": "Login successful"}, status=200)
    except UserCredentials.DoesNotExist:
        return JsonResponse({"message": "Invalid credentials"}, status=401)