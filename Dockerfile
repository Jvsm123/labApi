FROM node:16.13-alpine3.14

RUN mkdir /apiLab

WORKDIR /apiLab

COPY package.json /apiLab

RUN npm i yarn 

RUN yarn install

EXPOSE 8080

CMD [ "yarn", "run", "migrations" ]

CMD [ "yanr", "run", "dev" ]
