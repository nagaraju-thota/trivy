# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app
RUN apk update && apk upgrade --no-cache
COPY package*.json .
RUN npm install
COPY . .

# ---- Runtime stage ----
FROM node:20-alpine AS runtime
WORKDIR /app
RUN apk update && apk upgrade --no-cache
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/package*.json ./
COPY --from=build --chown=node:node /app .
RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx

USER node
CMD ["node", "index.js"]