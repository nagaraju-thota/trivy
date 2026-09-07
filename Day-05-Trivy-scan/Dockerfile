# Use a slim, pinned base image to reduce the attack surface Trivy scans
FROM node:22-alpine

WORKDIR /app

# Apply latest Alpine security patches (picks up fixed libcrypto3/libssl3, etc.)
RUN apk update && apk upgrade --no-cache

# Install dependencies first for better layer caching
COPY package.json ./
RUN npm install --omit=dev && npm install -g npm@latest

# Copy the rest of the app
COPY . .

EXPOSE 3000

CMD ["npm", "start"]