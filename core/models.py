from django.db import models

# Create your models here.
class Empleo(models.Model):
    idEmpleo = models.IntegerField(primary_key=True,verbose_name='Id de empleado')
    nombreEmpleo = models.CharField(max_length=50,verbose_name='Nombre Categoria')

    def __str__(self):
        return self.nombreEmpleo


class Empleado(models.Model):
    rut = models.CharField(max_length=10,primary_key=True,verbose_name='rut')
    nombre=models.CharField(max_length=25,verbose_name='nombre')
    apellido=models.CharField(max_length=25,verbose_name='apellido')
    correo=models.CharField(max_length=60,verbose_name='correo')
    empleo=models.ForeignKey(Empleo, on_delete=models.CASCADE)

    def __str__(self):
        return self.rut


