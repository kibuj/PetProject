from django.contrib import admin
from .models import CarBrand, CarModel, Car


@admin.register(CarBrand)
class CarBrandAdmin(admin.ModelAdmin):
    pass

@admin.register(CarModel)
class CarModelAdmin(admin.ModelAdmin):
    pass

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    pass
