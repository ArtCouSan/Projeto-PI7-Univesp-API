from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from onibus.api import  viewset as onibusviewsets

route = routers.DefaultRouter()

route.register(r'onibus', onibusviewsets.OnibusViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls)),
]
