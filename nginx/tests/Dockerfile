FROM nginx

RUN mkdir /www/data/out -p
RUN mkdir /www/data/storybook-static -p
RUN mkdir /var/cache/nginx -p

RUN rm /etc/nginx/mime.types
RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx/tests/nginx.conf /etc/nginx/
COPY ./nginx/tests/mime.types /etc/nginx/conf/
COPY ./out /www/data/out

EXPOSE 80