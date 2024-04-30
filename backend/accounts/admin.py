# In accounts/admin.py
from django.contrib import admin
from .models import AdminCredentials, Role, UserCredentials  # Import your model

admin.site.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = ('id', 'role_name')  # Display the ID and role name
    search_fields = ('role_name',)  # Enable search by role name
    list_filter = ('role_name',)  # Add a filter for role names
# Register the UserCredentials model with the admin site
admin.site.register(UserCredentials)

# If you're customizing the admin options
class UserCredentialsAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')  # Display specific fields
    search_fields = ('username',)  # Optional search functionality
    list_filter = ('roles',)  # Filter by roles
    autocomplete_fields = ['roles']  # Enable autocomplete for many-to-many field

# Register the AdminCredentials model with the admin interface
admin.site.register(AdminCredentials)