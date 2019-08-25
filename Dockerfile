FROM node:alpine as builder
WORKDIR '/client'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /client/dist /usr/share/nginx/html