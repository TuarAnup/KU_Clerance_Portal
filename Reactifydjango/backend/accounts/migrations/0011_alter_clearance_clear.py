# Generated by Django 3.2.3 on 2021-06-10 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_alter_clearance_datecleared'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clearance',
            name='Clear',
            field=models.CharField(choices=[('All Clear', 'All Clear'), ('Semi Clear', 'Semi Clear'), ('Not cleared', 'Not Cleared')], max_length=200, null=True),
        ),
    ]