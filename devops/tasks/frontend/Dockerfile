FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn install

ENV REACT_APP_SERVER_URL=http://localhost:8000

EXPOSE 3000
VOLUME /usr/src/app/src

CMD ["yarn", "start"]
