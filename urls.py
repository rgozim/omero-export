from django.conf.urls import include, url
from django.contrib import admin

from . import views

urlpatterns = [
    url(r'export_tool', views.to_other_omero, name='export_tool'),
]