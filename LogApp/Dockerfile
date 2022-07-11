# Filename: Dockerfile
FROM node:18
WORKDIR /home/wac/Documents/Callr/week_of_introduction_TCLR/LogApp
COPY package*.json ./
RUN npm install
RUN npm add js-confetti
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]
