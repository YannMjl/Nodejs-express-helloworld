FROM node

# update dependencies and install curl
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# update each dependency in package.json to the latest version
RUN npm install -g npm-check-updates \
    ncu -u \
    npm install \
    npm install express

# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . /app

EXPOSE 3000

CMD [ "babel-node", "app.js" ]
