# Generated by Django 5.0.4 on 2024-04-26 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usercredentials',
            name='id',
        ),
        migrations.AlterField(
            model_name='usercredentials',
            name='username',
            field=models.CharField(max_length=100, primary_key=True, serialize=False, unique=True),
        ),
    ]