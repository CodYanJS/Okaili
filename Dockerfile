FROM node

LABEL version="0.0.1" maintener="CodYanJS <earthlumier0@gmail.com>"

RUN npm i
RUN npm run dist:win