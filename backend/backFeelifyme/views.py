from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import RegisterSerializer, UserSerializer
from rest_framework import status
from backFeelifyme.models import Emocion
class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {"message": "Usuario creado correctamente"},
            status=status.HTTP_201_CREATED
        )

        
class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class EmocionTreeView(APIView):
    """
    Endpoint público que devuelve las emociones en un formato de árbol (Sunburst)
    ideal para la librería @nivo/sunburst en React.
    """
    def get(self, request):
        emociones = Emocion.objects.all()
        
        # Crear un diccionario temporal para estructurar de manera eficiente el árbol
        emocion_dict = {}
        for em in emociones:
            emocion_dict[em.id] = {
                "name": em.nombre,
                "nivel": em.nivel,
                "children": []
            }

        # Armar las relaciones estructuradas (hijo dentro de padre)
        for em in emociones:
            if em.padre_id and em.padre_id in emocion_dict:
                emocion_dict[em.padre_id]["children"].append(emocion_dict[em.id])

        # Extraer únicamente los que son del núcleo (Nivel 1 o sin padre) para el nivel superior
        root_children = [item for em_id, item in emocion_dict.items() if item["nivel"] == "1"]
        
        # Añadir la propiedad "loc" a los nodos "hoja" (último nivel),
        # ya que nivo la necesita para saber el tamaño de las porciones finales de la tarta.
        def assign_loc_to_leaves(node):
            if len(node["children"]) == 0:
                node["loc"] = 1
                del node["children"] # Eliminamos children si está vacío
            else:
                for child in node["children"]:
                    assign_loc_to_leaves(child)

        for root_node in root_children:
            assign_loc_to_leaves(root_node)

        # Retornamos el objeto final al estilo que nivo espera (un root con un array de hijos)
        tree = {
            "name": "root",
            "children": root_children
        }

        return Response(tree)
