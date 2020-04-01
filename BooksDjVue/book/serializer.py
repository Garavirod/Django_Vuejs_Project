from rest_framework import serializers
from .models import Book


# Esta clase nos permite trasnportar los datos atraves de la red en JSON, xl etc
class Bookserializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        # Fields to work
        fields = '__all__'