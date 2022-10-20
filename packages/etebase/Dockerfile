FROM ubuntu:20.04

RUN useradd -m etebase

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends git python3-pip dumb-init && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    ln -s python3 /usr/bin/python && \
    pip install --no-cache-dir uvicorn[standard] psycopg2-binary

RUN git clone --branch v0.10.0 https://github.com/etesync/server /home/etebase/app && \
    pip install --no-cache-dir -r /home/etebase/app/requirements.txt

WORKDIR /home/etebase/app

COPY etebase-server.ini ./

RUN mkdir static media && \
    sed -e '/ETEBASE_CREATE_USER_FUNC/ s/^#*/#/' -i ./etebase_server/settings.py && \
    chown etebase:etebase -R .

EXPOSE 8000

COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

CMD ["uvicorn", "etebase_server.asgi:application", "--port", "8000", "--host", "0.0.0.0"]
