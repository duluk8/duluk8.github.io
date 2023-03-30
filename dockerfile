FROM postgres:15.2

WORKDIR /var/lib/postgresql/data

ENV POSTGRES_PASSWORD=example123

ENV POSTGRES_DB=postgres

VOLUME /var/lib/postgresql/data