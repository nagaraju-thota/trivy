# Stage 1 — install dependencies
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .

# Stage 2 — minimal runtime, no npm bundled in
FROM node:20-alpine
RUN apk update && apk upgrade --no-cache
WORKDIR /app
COPY --from=builder /app /app
CMD ["node", "app.js"]