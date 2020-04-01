# Aqui realizamos en crud completo sobre el objeto
from rest_framework import viewsets
from .models import Book
from .serializer import Bookserializer
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = Bookserializer
