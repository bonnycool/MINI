from django.contrib import admin
from .models import CustomUser, AdminCredentials
from .choices import Role
@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'roll_no', 'semester', 'branch', 'get_role_display', 'is_staff', 'is_active',)
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')
    search_fields = ('username', 'email', 'roll_no', 'first_name', 'last_name')
    ordering = ('-date_joined',)

    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        (('Personal info'), {'fields': ('roll_no', 'semester', 'branch', 'phone_number')}),
        (('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'roll_no', 'semester', 'branch', 'phone_number', 'is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}
         ),
    )

class RoleAdmin(admin.ModelAdmin):
    list_display = ('name',)

admin.site.register(Role, RoleAdmin)

@admin.register(AdminCredentials)
class AdminCredentialsAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')