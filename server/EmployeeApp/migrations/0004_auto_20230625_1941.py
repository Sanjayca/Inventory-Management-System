# Generated by Django 2.2.14 on 2023-06-25 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EmployeeApp', '0003_auto_20230625_1318'),
    ]

    operations = [
        migrations.AlterField(
            model_name='store',
            name='StoreAddress',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='store',
            name='StoreCapacity',
            field=models.IntegerField(),
        ),
    ]
