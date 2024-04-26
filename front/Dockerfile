FROM node:11.13.0-alpine
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install
CMD [ "npm", "run", "start" ]