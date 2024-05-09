# In accounts/views.py

from django.http import HttpResponse, JsonResponse
from .models import UserCredentials,Profile # Ensure this import works
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from .models import AdminCredentials  # Import the new model
from django.contrib.auth.hashers import check_password  # Import check_password
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.views.decorators.cache import never_cache
from django.contrib.auth import logout
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response
from django.views.decorators.cache import cache_control
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

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
    plaintext_password = request.data.get('password')

    try:
        user = UserCredentials.objects.get(username=username)
        if check_password(plaintext_password, user.password):  # type: ignore # Check hashed password
            return JsonResponse({"message": "Login successful"}, status=200)
        else:
            return JsonResponse({"message": "Invalid credentials"}, status=401)
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

@api_view(['POST'])
def logout_view(request):
    request.session.flush()  # Clear all session data
    return JsonResponse({"message": "Logged out successfully"})
@cache_control(no_store=True, no_cache=True, must_revalidate=True)
def protected_view(request):
    return HttpResponse("This is a protected view")



@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])  # Ensure only authenticated users can access
def get_profile(request):
    # Use the logged-in user's email from the request object
    user_email = request.user.username  # For Django's User model, this should give you the email
    
    try:
        # Fetch the Profile for the logged-in user
        profile = Profile.objects.get(user__username=user_email)
    except Profile.DoesNotExist:
        # If no profile exists, create a new one (if that's the desired behavior)
        user = UserCredentials.objects.get(username=user_email)  # Ensure correct relation
        profile = Profile.objects.create(user=user)  # Create a new profile with default values

    # Return profile data along with the user's email
    data = {
        "email": user_email,  # Display the logged-in user's email
        "name": profile.name or '',
        "semester": profile.semester or '',
        "roll_number": profile.roll_number or '',
        "phone_number": profile.phone_number or '',
    }
    return Response(data, status=status.HTTP_200_OK)  # Return profile data