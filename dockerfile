FROM node:18-alpine

ENV NODE_ENV production

WORKDIR /restaurnat-utsyn

COPY ./package*.json /restaurnat-utsyn
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /restaurnat-utsyn/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]