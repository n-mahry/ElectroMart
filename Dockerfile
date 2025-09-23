# Use Node.js LTS as the base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose the app’s port
EXPOSE 5000

# Start the app
CMD ["node", "src/server.js"]
