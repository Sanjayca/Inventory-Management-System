# Generated by Django 2.2.14 on 2023-06-25 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EmployeeApp', '0004_auto_20230625_1941'),
    ]

    operations = [
        migrations.AlterField(
            model_name='store',
            name='StoreId',
            field=models.CharField(max_length=500, primary_key=True, serialize=False),
        ),
    ]
