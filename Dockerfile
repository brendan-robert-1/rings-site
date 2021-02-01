FROM node:10 AS build
WORKDIR /app/
RUN git clone https://github.com/brendan-robert-1/rings-site.git
RUN cd rings-site/my-app/app && npm install
EXPOSE 3080
CMD ["node","/app/rings-site/my-app/app/app.js"]