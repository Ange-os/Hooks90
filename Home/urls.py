from django.urls import path
from .views import homepage_view, sevice_view, contact_view
urlpatterns = [
    path('', homepage_view, name='homepage'),
    path('servicios', sevice_view, name='servicepage'),
    path('contact/', contact_view, name='contact'),
    ]