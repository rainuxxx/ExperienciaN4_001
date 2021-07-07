from django import forms

from . models import Empleado

class EmpleadoForm(forms.ModelForm):
    class Meta:
        model = Empleado
        fields = '__all__'

        labels= {
            
            'rut': 'Digite rut',
            'nombre': 'Digite nombre',
            'apellido': 'Digite apellido',
            'correo': 'Digite correo',
            'empleo': 'Seleccione Sintoma'
            
        }


        widgets={

            'rut': forms.TextInput(attrs={'class':'form-control','id':'rut'}),
            'nombre':forms.TextInput(attrs={'class':'form-control','id':'nombre'}),
            'apellido':forms.TextInput(attrs={'class':'form-control','id':'apellido'}),
            'empleo ': forms.SelectMultiple(attrs={'class':'form-control','id':'empleo'}),
            'correo':forms.TextInput(attrs={'class':'form-control','id':'correo'}),

        }  

    


