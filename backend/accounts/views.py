# In accounts/views.py
from django.http import JsonResponse
from .models import UserCredentials  # Ensure this import works
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from .models import AdminCredentials  # Import the new model

from django.contrib.auth.decorators import login_required
from .decorator import role_required  # Import your custom decorator

@login_required
@role_required('admin')  # Use the decorator to restrict access to admins
def admin_view(request):
    # Your admin view logic here
    pass

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


@api_view(['POST'])
def admin_login(request):
    # Retrieve the username and password from the POST request data
    admin_username = request.data.get('admin_username')
    admin_password = request.data.get('admin_password')

    # Check if the credentials are correct
    try:
        admin = AdminCredentials.objects.get(admin_username=admin_username, admin_password=admin_password)
        return JsonResponse({"message": "Admin login successful"}, status=200)  # Success response
    except AdminCredentials.DoesNotExist:
        return JsonResponse({"message": "Invalid admin credentials"}, status=401)  # Error response