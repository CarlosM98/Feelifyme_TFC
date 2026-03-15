from django.contrib import admin

# Register your models here.
from .models import (
    Profile, Emocion, RegistroDiario, EmocionRegistrada,
    Actividad, ActividadRealizada, Logro, LogroUsuario,
    Recomendacion, RecomendacionEmocion
)

admin.site.register(Profile)
admin.site.register(Emocion)
admin.site.register(RegistroDiario)
admin.site.register(EmocionRegistrada)
admin.site.register(Actividad)
admin.site.register(ActividadRealizada)
admin.site.register(Logro)
admin.site.register(LogroUsuario)
admin.site.register(Recomendacion)
admin.site.register(RecomendacionEmocion)