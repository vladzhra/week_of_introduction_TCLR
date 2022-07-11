# Filename: Dockerfile
FROM node:18
WORKDIR /home/wac/Documents/Callr/week_of_introduction_TCLR/auth_api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
