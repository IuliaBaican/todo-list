# Base image, built on Node LTS, and Alpine
FROM node:lts-alpine AS builder
WORKDIR /app

## Copy over dependencies and build them
COPY package*.json tsconfig.json ./

RUN npm install

## Copy source code
COPY . .

ENV PORT=8080

## Expose application port
EXPOSE 8080

CMD ["npm", "run", "start:dev"]