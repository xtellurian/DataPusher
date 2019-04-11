FROM node:8.15.1-alpine
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD [ "node", "app.js" ]