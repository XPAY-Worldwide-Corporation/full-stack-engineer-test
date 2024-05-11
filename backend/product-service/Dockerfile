# Specify the base image
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build the application if it's a TypeScript project
RUN npm run build

# Expose the port the app runs on
EXPOSE 3004

# Command to run the application
CMD ["node", "dist/main"]