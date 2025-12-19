#!/bin/sh

# Wait for database to be ready using Python
echo "Waiting for database..."
python -c "
import socket
import time
import os
host = os.getenv('DB_HOST', 'postgres')
port = int(os.getenv('DB_PORT', '5432'))
while True:
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((host, port))
        sock.close()
        if result == 0:
            break
    except:
        pass
    time.sleep(0.1)
print('Database is ready!')
"

# Run migrations
python manage.py migrate

# Create default user if not exists
python manage.py shell -c "
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='robson').exists():
    User.objects.create_user(username='robson', email='rbs@gmail.com', password='password')
    print('Default user created')
else:
    print('Default user already exists')
"

# Start the server
exec python manage.py runserver 0.0.0.0:8001