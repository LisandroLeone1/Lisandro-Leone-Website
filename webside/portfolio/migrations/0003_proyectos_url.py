# Generated by Django 5.0.4 on 2024-09-05 22:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_proyectos_imagen'),
    ]

    operations = [
        migrations.AddField(
            model_name='proyectos',
            name='url',
            field=models.URLField(blank=True, null=True),
        ),
    ]