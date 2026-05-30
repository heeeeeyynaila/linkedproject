"""
WSGI config for hospital_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hospital_project.settings')

application = get_wsgi_application()

# ── Dynamic Cloud Database Password Seeder ──
try:
    from django.contrib.auth import get_user_model
    User = get_user_model()
    
    # 1. Reset Guardian (Samira Brahim)
    samira = User.objects.filter(username='samira.brahim@yahoo.fr').first()
    if samira:
        samira.set_password('password123')
        samira.save()
        print("☁️ Live Seeder: Reset samira.brahim@yahoo.fr password to 'password123' successfully!")
        
    # 2. Reset Doctor (Karim Brahim)
    doctor = User.objects.filter(username='karim.brahim@gmail.com').first()
    if doctor:
        doctor.set_password('password123')
        doctor.save()
        print("☁️ Live Seeder: Reset karim.brahim@gmail.com password to 'password123' successfully!")

    # 3. Reset Admin (admin@arcio.com)
    admin = User.objects.filter(username='admin@arcio.com').first()
    if admin:
        admin.set_password('password123')
        admin.save()
        print("☁️ Live Seeder: Reset admin@arcio.com password to 'password123' successfully!")
        
except Exception as e:
    print("⚠️ Live Seeder Warning:", e)

