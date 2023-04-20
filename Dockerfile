FROM node:18-alpine3.17

# RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3002

CMD ["npm", "start"]