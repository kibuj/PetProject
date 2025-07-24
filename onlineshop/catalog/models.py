from django.contrib.auth.models import AbstractUser
from django.db import models

class CarBrand(models.Model):
    brand = models.CharField(max_length=30)

    def __str__(self):
        return self.brand

class CarModel(models.Model):
    brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Car(models.Model):
    brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE)
    name = models.ForeignKey(CarModel, on_delete=models.CASCADE)
    engine = models.CharField(max_length=30)
    body = models.CharField(max_length=30, blank=True)
    year = models.IntegerField()
    price = models.PositiveIntegerField()
    mileage = models.PositiveIntegerField(help_text="Пробіг автомобіля")
    fuel_type = models.CharField(max_length=20, choices=[
        ('diesel', 'Diesel'),
        ('petrol', 'Petrol'),
        ('electric', 'Electric'),
        ('hybrid', 'Hybrid'),
        ('gas', 'Gas'),
    ]
                                 )
    transmission = models.CharField(max_length=20, choices=[
        ('manual', 'Manual'),
        ('automatic', 'Automatic'),
    ])
    image = models.ImageField(upload_to='car_images/')
    status = models.CharField(max_length=20, choices=[
        ('in stock', 'In stock'),
        ('expiring', 'Expiring'),
        ('out of stock', 'Out of stock'),
    ])

    def __str__(self):
        return str(self.brand) + ' ' + str(self.name) + ' ' + str(self.year)

