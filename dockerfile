FROM node:18-alpine

ENV NODE_ENV development

WORKDIR /restaurnat-utsyn

COPY ./package*.json /restaurnat-utsyn

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "npm", "start"]

#for å kjøre skriv docker run -p 3000:3000 andrehan/restaurant-utsyn