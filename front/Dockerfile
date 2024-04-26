FROM node:11.13.0-alpine
RUN mkdir -p /usr/src/nuxt-app
COPY . /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
RUN npm install
RUN npm run build
CMD [ "npm", "run", "start" ]