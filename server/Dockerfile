FROM curlimages/curl:latest
FROM node:21-alpine3.18

WORKDIR /app

COPY . .

RUN yarn global add nodemon

RUN npm i

CMD ["npm" , "run", "dev"]

EXPOSE 8000