from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
import json
from .models import User

@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    try:
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        if not username or not email or not password:
            return Response({'error': 'All fields are required'}, status=400)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=400)

        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists'}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password, role='user')
        return Response({'message': 'User created successfully'}, status=201)

    except Exception as e:
        return Response({'error': str(e)}, status=400)

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    try:
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Username and password are required'}, status=400)

        user = None
        try:
            user_obj = User.objects.get(email=username)
            user = authenticate(request, username=user_obj.username, password=password)
        except User.DoesNotExist:
            user = authenticate(request, username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'message': 'Login successful',
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                    'role': user.role
                },
                'tokens': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }
            })
        else:
            return Response({'error': 'Invalid credentials'}, status=401)

    except Exception as e:
        return Response({'error': str(e)}, status=400)

@require_POST
def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logout successful'})

@api_view(['GET'])
def check_auth_view(request):
    if request.user.is_authenticated:
        return Response({
            'authenticated': True,
            'user': {
                'id': request.user.id,
                'username': request.user.username,
                'email': request.user.email,
                'role': request.user.role
            }
        })
    else:
        return Response({'authenticated': False}, status=401)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ai_search_view(request):
    try:
        query = request.data.get('query', '')

        if not query:
            return Response({'error': 'Query is required'}, status=400)

        # Try to use Gemini AI, fallback to mock data if not available
        try:
            import google.generativeai as genai
            genai.configure(api_key='AIzaSyA75aYNO6OBZKPwtWPpGc7EdOfI-l2TpOo')

            model = genai.GenerativeModel('gemini-1.5-flash')

            prompt = f"""
            Recherche dans les documentations officielles pour: "{query}"

            Fournis une réponse structurée en JSON avec les champs suivants:
            - summary: Un résumé informatif en français avec des liens HTML vers les documentations officielles pertinentes
            - sources: Liste d'objets avec name, url, verified (true)
            - images: Liste d'objets avec url, title, source (optionnel)
            - videos: Liste d'objets avec url, title, source (optionnel)
            - pdfs: Liste d'objets avec title, url, pages, source (optionnel)

            Assure-toi que toutes les sources sont officielles et vérifiées.
            Le résumé doit inclure des liens cliquables vers les docs officiels.
            Réponds uniquement avec du JSON valide.
            """

            response = model.generate_content(prompt)
            response_text = response.text.strip()

            # Try to parse as JSON
            try:
                if response_text.startswith('```json'):
                    response_text = response_text[7:-3].strip()
                elif response_text.startswith('```'):
                    response_text = response_text[3:-3].strip()

                response_data = json.loads(response_text)
            except json.JSONDecodeError:
                # Fallback to mock data if parsing fails
                response_data = {
                    'summary': f'Résultats pour "{query}" - Recherche effectuée avec IA Gemini. {response_text[:500]}...',
                    'sources': [
                        {'name': 'Documentation officielle', 'url': 'https://docs.example.com', 'verified': True}
                    ],
                    'images': [],
                    'videos': [],
                    'pdfs': []
                }
        except ImportError:
            # Fallback to mock data if Gemini not installed
            response_data = {
                'summary': f'Résultats pour "{query}" - Recherche dans les documentations officielles. Fonctionnalité IA en cours d\'installation.',
                'sources': [
                    {'name': 'Documentation en attente', 'url': 'https://docs.example.com', 'verified': True}
                ],
                'images': [],
                'videos': [],
                'pdfs': []
            }

        return Response(response_data)

    except Exception as e:
        return Response({'error': str(e)}, status=500)
