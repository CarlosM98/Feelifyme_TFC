from rest_framework import serializers
from django.contrib.auth.models import User
from .models import (
    Profile,
    Actividad,
    RegistroDiario,
    EmocionRegistrada,
    ActividadRealizada,
    Emocion
)

class RegisterSerializer(serializers.Serializer):
    nombre = serializers.CharField()
    apellido1 = serializers.CharField()
    apellido2 = serializers.CharField(required=False, allow_blank=True)
    correo = serializers.EmailField()
    contrasenha = serializers.CharField(write_only=True)
    confirmarContrasenha = serializers.CharField(write_only=True)
    
    def validate(self, data):
        if data['contrasenha'] != data['confirmarContrasenha']:
            raise serializers.ValidationError('Las contraseñas no coinciden.')
        return data
    
    def create(self,validated_data):
        user = User.objects.create_user(
            username = validated_data['correo'],
            email = validated_data['correo'],
            password = validated_data['contrasenha']
        )
        
        Profile.objects.create(
            user = user,
            nombre = validated_data['nombre'],
            apellido1 = validated_data['apellido1'],
            apellido2 = validated_data['apellido2']
        )
    
        return user
    
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["nombre", "apellido1", "apellido2", "dni"]

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True, required=False)

    class Meta:
        model = User
        fields = ["id", "username", "email", "profile"]


class ActividadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actividad
        fields = ["id", "nombre"]


class RegistroDiarioCreateSerializer(serializers.Serializer):
    fecha = serializers.DateField()
    notas = serializers.CharField(allow_blank=True, required=False)
    emociones = serializers.ListField(child=serializers.IntegerField())
    actividades = serializers.ListField(child=serializers.IntegerField())

    def create(self, validated_data):
        user = self.context['request'].user

        registro = RegistroDiario.objects.create(
            usuario=user,
            fecha=validated_data['fecha'],
            notas=validated_data.get('notas', '')
        )

        for emocion_id in validated_data['emociones']:
            EmocionRegistrada.objects.create(
                registro=registro,
                emocion=Emocion.objects.get(id=emocion_id)
            )

        for actividad_id in validated_data['actividades']:
            ActividadRealizada.objects.create(
                registro=registro,
                actividad=Actividad.objects.get(id=actividad_id)
            )

        return registro


class RegistroDiarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroDiario
        fields = ["id", "fecha", "notas", "created_at"]


class EmocionRegistradaSerializer(serializers.ModelSerializer):
    emocion = serializers.StringRelatedField()
    fecha = serializers.DateField(source="registro.fecha")

    class Meta:
        model = EmocionRegistrada
        fields = ["id", "emocion", "fecha", "registro"]

class ActividadRealizadaSerializer(serializers.ModelSerializer):
    actividad = serializers.StringRelatedField()
    fecha = serializers.DateField(source="registro.fecha")

    class Meta:
        model = ActividadRealizada
        fields = ["id", "actividad", "fecha", "registro"]