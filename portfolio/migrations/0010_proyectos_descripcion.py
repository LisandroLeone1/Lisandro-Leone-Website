# Generated by Django 5.1.6 on 2025-05-15 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0009_remove_proyectos_descripcion'),
    ]

    operations = [
        migrations.AddField(
            model_name='proyectos',
            name='descripcion',
            field=models.TextField(blank=True, null=True),
        ),
    ]
