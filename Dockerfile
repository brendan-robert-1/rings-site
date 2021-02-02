FROM node:10 AS build
WORKDIR /app/
RUN git clone https://github.com/brendan-robert-1/rings-site.git
RUN cd rings-site/my-app/app && npm install
RUN apt-get update && apt-get install -y mysql-client && rm -rf /var/lib/apt
RUN apt-get update && apt-get install vim
EXPOSE 3080
CMD ["node","/app/rings-site/my-app/app/app.js"]