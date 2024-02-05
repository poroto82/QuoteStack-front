# Etapa de construcción
FROM node:16-alpine as builder

RUN apk add curl
RUN yarn global add serve

WORKDIR /tmp/app

# Copia los archivos de la aplicación React
COPY . .

# Instala las dependencias
RUN yarn install

# Construye la aplicación React
RUN yarn build

# Etapa de producción
FROM nginx:alpine

# Copia los archivos construidos desde la etapa de construcción
COPY --from=builder /tmp/app/build /usr/share/nginx/html

# Configuración adicional para Nginx si es necesario
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]