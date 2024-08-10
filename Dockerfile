# define base image
FROM node:alpine

# define working directory
WORKDIR /app

# copy working files to /app working directory
COPY . /app

# copt package json files to current working directory
COPY package*.json ./

# install dependecies
Run npm install

# copy rest everything
COPY . .

# expose docker port number
EXPOSE 3000

# command for running the application
CMD ["node","app.js"]

