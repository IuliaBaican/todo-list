# Base image
FROM node:lts-alpine AS base

WORKDIR /app

## Copy over dependencies and build them
COPY package*.json tsconfig.json ./

RUN npm install

## Copy source code
COPY . .

# Build the React app
RUN npm run build

ENV PORT=3000

## Expose application port
EXPOSE 3000

ENTRYPOINT ["npm", "run"]
CMD ["dev"]