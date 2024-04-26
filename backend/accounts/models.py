from django.db import models
# In accounts/models.py

from django.db import models

class UserCredentials(models.Model):
    username = models.CharField(max_length=100, unique=True, primary_key=True)  # Custom primary key
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.username  # Display name for the model
