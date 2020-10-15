FROM node:lts-alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ENV PORT 4000
EXPOSE $PORT

RUN npm i -g pm2 --silent

RUN pm2 install typescript

COPY package.json .
COPY *lock.json .

RUN npm install --silent

COPY . .

CMD ["pm2-runtime", "start", "pm2.config.js"]
