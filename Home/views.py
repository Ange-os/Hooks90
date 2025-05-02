from django.shortcuts import render
from .models import Participacion
from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm
from django.core.mail import send_mail


def homepage_view(request):
    participaciones = Participacion.objects.all()
    return render(request, 'home/index.html', {'participaciones': participaciones})

def sevice_view(request):
    return render(request, 'servicios.html')



def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Extraer los datos del formulario
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            
            # Enviar correo
            send_mail(
                subject=f'Mensaje de {email} ',  # Asunto del correo
                message=f'mensaje de {name}: {message}',               # Mensaje del correo
                from_email=email,              # Correo del remitente
                recipient_list=['riostabla56@gmail.com'],  # Cambia a tu correo de Gmail
                fail_silently=False,
            )
            
            messages.success(request, "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.")
            return redirect('contact')  # Redirige después de enviar el mensaje
    else:
        form = ContactForm()
    
    return render(request, 'contact.html', {'form': form})