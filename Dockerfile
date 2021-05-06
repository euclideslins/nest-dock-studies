FROM node:12.19

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD npm run start:dev