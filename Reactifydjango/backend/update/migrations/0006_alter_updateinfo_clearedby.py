# Generated by Django 3.2.3 on 2021-06-15 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('update', '0005_auto_20210615_0739'),
    ]

    operations = [
        migrations.AlterField(
            model_name='updateinfo',
            name='ClearedBy',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
