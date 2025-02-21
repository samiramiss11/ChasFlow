FROM node:22-alpine3.19

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["node","server.js"]