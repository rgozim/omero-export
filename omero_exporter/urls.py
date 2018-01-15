from django.conf.urls import url

from omero_exporter import views

urlpatterns = [
    url(r'export_tool', views.to_other_omero, name='export_tool'),
]