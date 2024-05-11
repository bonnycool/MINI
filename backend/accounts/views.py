from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from django.core.validators import RegexValidator

class CustomUserGroupsManager(UserManager):
    pass

class CustomUserGroups(AbstractUser):
    roll_no = models.CharField(max_length=20, blank=True, null=True)  # Roll number
    semester = models.IntegerField(blank=True, null=True)  # Semester number
    branch = models.CharField(max_length=100, blank=True, null=True)  # Branch name
    phone_number = models.CharField(
        max_length=15,
        blank=True,
        null=True,
        validators=[RegexValidator(regex=r'^\+?1?\d{9,15}$', message='Enter a valid phone number')]
    )

    objects = CustomUserGroupsManager()

    def __str__(self):
        return f"Profile of {self.username}"

class RoleView(models.Model):
    role_name = models.CharField(max_length=50, unique=True)  # Role names like 'admin', 'user', etc.

    def __str__(self):
        return self.role_name

class Profile(models.Model):
    user = models.OneToOneField(CustomUserGroups, on_delete=models.CASCADE)
    role = models.ForeignKey(RoleView, on_delete=models.CASCADE)  # Each user can have only one role
    # Add any additional fields you want to store in the profile

class AdminCredentials(models.Model):
    admin_user = models.ForeignKey(CustomUserGroups, on_delete=models.CASCADE, related_name='admin_credentials')  # Unique admin identifier
    admin_password = models.CharField(max_length=100)  # Admin's password

    def __str__(self):
        return self.admin_user