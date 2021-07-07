from django.shortcuts import render,redirect 
from . models import Empleo, Empleado
from . forms import EmpleadoForm
from django.views import generic

from django.views.generic.edit import  UpdateView, DeleteView
from django.urls import reverse_lazy


# Create your views here.
def index(request):

    empleados = Empleado.objects.all()

    return render (request,'index.html', context ={'datos': empleados})

def imagenes(request):

    return render (request,'imagenes.html')  

def quienesSomos(request):

    return render(request,'quienesSomos.html')      



def empleado_create(request):
    if request.method =='POST':
        empleado=EmpleadoForm(request.POST)
        if empleado.is_valid():
            post=empleado.save(commit=False)
            post.save()
            return redirect('empleado-detail',pk=post.pk)
    else:
        empleado=EmpleadoForm()        

    return render(request, 'core/empleado_form.html', {'empleado' : empleado})

class EmpleadoDetailView(generic.DetailView):

    model=Empleado 

class EmpleadoListView(generic.ListView):

    model=Empleado

class EmpleadoDelete(generic.DeleteView):
    model = Empleado
    success_url = reverse_lazy('empleados')
    

class EmpleadoUpdate(UpdateView):
    model = Empleado
    success_url = reverse_lazy('empleados')
    fields = ['rut','nombre', 'apellido', 'empleo', 'correo']
    template_name_suffix = '_update_form' 



    


