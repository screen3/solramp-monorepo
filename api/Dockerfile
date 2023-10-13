# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js application dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose the port your application will run on (e.g., 3000)
EXPOSE 3000

# Define the command to start your Node.js application
CMD ["node", "index.js"]
