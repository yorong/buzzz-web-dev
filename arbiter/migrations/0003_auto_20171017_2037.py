# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-10-17 20:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('arbiter', '0002_auto_20171017_1612'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bch',
            name='ask',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='bch',
            name='bid',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='etc',
            name='ask',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='etc',
            name='bid',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='eth',
            name='ask',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='eth',
            name='bid',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='xrp',
            name='ask',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='xrp',
            name='bid',
            field=models.IntegerField(),
        ),
    ]