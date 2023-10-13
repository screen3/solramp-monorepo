# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire React application source code to the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Expose a port to access the application (typically port 80 for HTTP)
EXPOSE 80

# Start the React application when the Docker container starts
CMD ["npm", "start"]
