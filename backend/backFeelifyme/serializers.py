from rest_framework import serializers
from django.contrib.auth.models import User
from .models import (
    Profile,
    Actividad
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
