from django.db import models
from django.contrib.auth.hashers import make_password  # Import the make_password function

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
    user = models.ForeignKey(UserCredentials, on_delete=models.CASCADE, null=True, blank=True)  # Allow nulls
    admin_username = models.CharField(max_length=100, unique=True, primary_key=True)  # Unique admin identifier
    admin_password = models.CharField(max_length=100)  # Admin's password

    def __str__(self):
        return self.admin_username
    
