FROM node:18.16.0-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node index.js