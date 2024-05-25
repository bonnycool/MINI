from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager

class CustomUser(AbstractUser):
    roll_no = models.CharField(max_length=20, unique=True)
    semester = models.IntegerField(choices=((1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5'), (6, '6'), (7, '7'), (8, '8')))
    branch = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=20)

    objects = UserManager()

    def __str__(self):
        return self.username
class AdminCredentials(models.Model):
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.username