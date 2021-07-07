from django.urls import path
from .  import  views
from django.conf import settings 
from django.conf.urls.static import static 


urlpatterns = [
     path('', views.index, name="index"),
     path('imagenes/',views.imagenes,name="imagenes"),
     path('quienesSomos/',views.quienesSomos,name="quienesSomos"),
     
    
    
      path('Empleado/<str:pk>',views.EmpleadoDetailView.as_view(),name="empleado-detail"),
      path('Empleado/',views.EmpleadoListView.as_view(),name='empleados'),
      path('Empleado/create/', views.empleado_create, name="empleado_create"),
      path('Empleado/<str:pk>/delete/', views.EmpleadoDelete.as_view(), name='empleado_delete'),
      path('Empleado/<str:pk>/update',views.EmpleadoUpdate.as_view(), name='empleado_update'),

     

]

