FROM node:10 AS build
WORKDIR /usr/src/app
COPY my-app/ ./my-app/
RUN cd my-app/app  && npm install && npm run build
EXPOSE 3080
#CMD ["node","./app.js"]