#syntax=docker/dockerfile:1
FROM node:16-alpine
RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm install pm2 -g
RUN npm run build-react
CMD ["pm2-runtime", "index.js"]
EXPOSE 3000