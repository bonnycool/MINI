from django.db import models
from django.contrib.auth.hashers import make_password  # Import the make_password function
from django.core.validators import RegexValidator
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
class Role(models.Model):
    role_name = models.CharField(max_length=50, unique=True)  # Role names like 'admin', 'user', etc.

    def __str__(self):
        return self.role_name

class UserCredentials(models.Model):
   
    username = models.CharField(max_length=100, unique=True, primary_key=True)  # Email as username
    password = models.CharField(max_length=100)  # Store the user's password


    def __str__(self):
        return self.username
    def save(self, *args, **kwargs):
        # Hash the password only if it's not already hashed
        if not self.pk or not self.password.startswith('pbkdf2_'):  # Ensure double hashing doesn't occur
            self.password = make_password(self.password)  # Hash the password before saving
        super().save(*args, **kwargs) 
        
# New model for admin credentials with a foreign key to UserCredentials
class AdminCredentials(models.Model):

    admin_username = models.CharField(max_length=100, unique=True, primary_key=True)  # Unique admin identifier
    admin_password = models.CharField(max_length=100)  # Admin's password

    def __str__(self):
        return self.admin_username
    
class Profile(models.Model):
    # Auto-incremented primary key
    id = models.AutoField(primary_key=True)
    
    # One-to-One relationship with UserCredentials
    email = models.OneToOneField(UserCredentials, on_delete=models.CASCADE, related_name='profile', to_field='username')
    
    # Other attributes
    roll_no = models.CharField(max_length=20, blank=True, null=True)  # Roll number
    semester = models.IntegerField(blank=True, null=True)  # Semester number
    branch = models.CharField(max_length=100, blank=True, null=True)  # Branch name
    phone_number = models.CharField(
        max_length=15,
        blank=True,
        null=True,
        validators=[RegexValidator(regex=r'^\+?1?\d{9,15}$', message='Enter a valid phone number')]
    )

    def __str__(self):
        return f"Profile of {self.email.username}"


