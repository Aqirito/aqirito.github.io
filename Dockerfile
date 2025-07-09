# Use the official Alpine 20 image as the base image
FROM node:20-alpine

# Install necessary dependencies
RUN apk add --no-cache nodejs npm

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Serve the project using the Svelte adapter for Node.js
CMD ["node", "build"]
