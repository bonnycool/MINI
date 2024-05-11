from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Role, Profile, AdminCredentials

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'is_active', 'get_role')
    list_filter = ('role',)

    def get_role(self, obj):
        return obj.role
    get_role.short_description = 'Role'

# Re-register UserAdmin
admin.site.register(CustomUser, CustomUserAdmin)

class RoleViewAdmin(admin.ModelAdmin):
    list_display = ('role_name',)

admin.site.register(Role, RoleViewAdmin)

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user',)

admin.site.register(Profile, ProfileAdmin)

class AdminCredentialsAdmin(admin.ModelAdmin):
    list_display = ('admin_user', 'admin_password')

admin.site.register(AdminCredentials, AdminCredentialsAdmin)