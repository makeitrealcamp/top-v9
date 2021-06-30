FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn install

# ENV MONGO_URI=mongodb://localhost:27018/tasks
# ENV PORT=9000

EXPOSE 9000
VOLUME /usr/src/app/src

CMD ["yarn", "dev"]
