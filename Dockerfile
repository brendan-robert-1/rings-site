FROM node:10 AS build
WORKDIR /app/
COPY my-app /app/rings-site
RUN cd rings-site/my-app/app && npm install
RUN apt-get update && apt-get install -y mysql-client && rm -rf /var/lib/apt
RUN apt-get update && apt-get install -y vim
EXPOSE 3080
#CMD ["node","/app/rings-site/my-app/app/app.js"]
