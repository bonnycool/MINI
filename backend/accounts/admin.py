# In accounts/admin.py
from django.contrib import admin
from .models import AdminCredentials, UserCredentials  # Import your model

# Register the UserCredentials model with the admin site
admin.site.register(UserCredentials)

# If you're customizing the admin options
class UserCredentialsAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')  # Display specific fields
    search_fields = ('username',)  # Optional search functionality

# Register the AdminCredentials model with the admin interface
admin.site.register(AdminCredentials)