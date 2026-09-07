# Use a slim, pinned base image to reduce the attack surface Trivy scans
FROM node:20-alpine
 
WORKDIR /app
 
# Install dependencies first for better layer caching
COPY package.json ./
RUN npm install --omit=dev
 
# Copy the rest of the app
COPY . .
 
EXPOSE 3000
 
CMD ["npm", "start"]