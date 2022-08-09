FROM ubuntu

RUN apt-get update

RUN apt-get install nginx -y

RUN apt install nodejs -y

COPY index.html /var/www/html/
COPY config.js /var/www/html/
COPY ./view /var/www/html/view/
COPY ./model /var/www/html/model/
COPY ./control /var/www/html/control/

EXPOSE 80

CMD ["nginx","-g","daemon off;"]