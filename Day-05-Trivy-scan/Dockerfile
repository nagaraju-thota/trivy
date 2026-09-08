# ---- Base image ----
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (better layer caching - deps only reinstall if these change)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app listens on
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]