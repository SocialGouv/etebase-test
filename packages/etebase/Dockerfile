FROM ubuntu:20.04

RUN useradd -m etebase

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends git python3-pip && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    ln -s python3 /usr/bin/python && \
    pip install --no-cache-dir uvicorn[standard] psycopg2-binary

RUN git clone --branch v0.10.0 https://github.com/etesync/server /home/etebase/app && \
    pip install --no-cache-dir -r /home/etebase/app/requirements.txt

WORKDIR /home/etebase/app

COPY etebase-server.ini .

RUN mkdir static media && \
    chown etebase:etebase -R .

EXPOSE 8000

CMD ["uvicorn", "etebase_server.asgi:application", "--port", "8000", "--host", "0.0.0.0"]

# Necessary runtime commands
# create database mydb;
# ./manage.py collectstatic && \
# ./manage.py migrate && \
# DJANGO_SUPERUSER_PASSWORD=password bash -c './manage.py createsuperuser --username user --email user@user.net --no-input'
