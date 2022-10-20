#!/bin/bash

./manage.py collectstatic --no-input
./manage.py migrate
DJANGO_SUPERUSER_PASSWORD=password bash -c './manage.py createsuperuser --username user --email admin@example.org --no-input'

exec /usr/bin/dumb-init -- $@
