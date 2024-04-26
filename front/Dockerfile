FROM node:11.13.0-alpine
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
CMD [ "npm", "run", "start" ]