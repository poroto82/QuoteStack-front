FROM node:16-alpine as builder
RUN apk add curl
RUN yarn global add serve
#RUN yarn add nodemon --global
WORKDIR /tmp/app
