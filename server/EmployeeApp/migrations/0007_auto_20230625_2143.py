# Generated by Django 2.2.14 on 2023-06-25 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EmployeeApp', '0006_auto_20230625_2008'),
    ]

    operations = [
        migrations.RenameField(
            model_name='vendor',
            old_name='PayementMethod',
            new_name='PaymentMethod',
        ),
        migrations.AlterField(
            model_name='vendor',
            name='VendorContact',
            field=models.BigIntegerField(),
        ),
    ]
