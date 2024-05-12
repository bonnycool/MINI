from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django import forms
from .models import CustomUser, Role, Profile
from .forms import AdminLoginForm, ProfileForm

def admin_login(request):
    # ...

@login_required(login_url='/admin_login/')
def get_users(request):
    users = CustomUser.objects.all()
    return render(request, 'accounts/get_users.html', {'users': users})

@login_required(login_url='/admin_login/')
def get_profile(request, pk):
    user = CustomUser.objects.get(pk=pk)
    profile = user.profile  # Assuming you have a Profile model with a OneToOneField to CustomUser
    return render(request, 'accounts/get_profile.html', {'user': user, 'profile': profile})

@login_required(login_url='/admin_login/')
def create_user(request):
    # ...

@login_required(login_url='/admin_login/')
def delete_user(request, pk):
    user = CustomUser.objects.get(pk=pk)
    user.delete()
    return redirect('get_users')

@login_required(login_url='/admin_login/')
def admin_logout(request):
    logout(request)
    return redirect('admin_login')

class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=Role.choices)

    def __str__(self):
        return f'{self.user.username} Profile'

@receiver(post_save, sender=CustomUser)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=CustomUser)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()

@login_required(login_url='/admin_login/')
def create_profile(request):