from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from catalog.views import CarsAPIView, RegisterAPIView, LoginAPIView

router = routers.DefaultRouter()
router.register(r'api/cars', CarsAPIView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('register/', RegisterAPIView.as_view()),
    path('login/', LoginAPIView.as_view()),
]
