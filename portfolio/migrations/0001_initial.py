# Generated by Django 5.0.4 on 2024-08-27 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Proyectos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('descripcion', models.TextField()),
                ('fecha_inicio', models.DateField()),
                ('fecha_finalizacion', models.DateField(blank=True, null=True)),
                ('estado', models.CharField(choices=[('en_desarrollo', 'En Desarrollo'), ('terminado', 'Terminado'), ('pausado', 'Pausado')], default='en_desarrollo', max_length=20)),
            ],
            options={
                'verbose_name': 'Proyecto',
                'verbose_name_plural': 'Proyectos',
            },
        ),
    ]
