#1st Stage
FROM node:latest as build-stage
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
RUN npm run build

#2nd Stage to add change
FROM nginx:alpine
COPY --from=build-stage /app/dist/angular /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]