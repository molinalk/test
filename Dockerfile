FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm i 

FROM node:20-alpine AS dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package*.json ./
CMD npm run dev

FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS deps-prod
WORKDIR /app
COPY package.json ./
RUN npm i --omit=dev

FROM node:20-alpine AS prod
WORKDIR /app
COPY --from=build /app/dist  ./
COPY --from=deps-prod /app/node_modules ./node_modules
CMD node app.js