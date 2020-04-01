from rest_framework import routers
from .viewsets import BookViewSet

# Define las rutas para el modelo PUT GET, POST ... 
router = routers.SimpleRouter()
# Registramos la url
router.register('books',BookViewSet)

urlpatterns = router.urls