FROM node:18.0.0 AS node-server

COPY src /app/src
COPY package.json /app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start" ]

