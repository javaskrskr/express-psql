FROM node:16

# define working dir, the const app from server
WORKDIR /app 

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["node","server.js"]