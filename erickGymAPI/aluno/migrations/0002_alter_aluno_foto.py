# Generated by Django 5.0.3 on 2024-03-28 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aluno', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aluno',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to='foto-aluno/'),
        ),
    ]