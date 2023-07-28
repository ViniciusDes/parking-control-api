FROM node:16-alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3334

CMD ["npm", "run", "dev"]
