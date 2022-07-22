# Filename: Dockerfile
FROM node:18
WORKDIR /app/auth_api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
