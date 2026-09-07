# ---- Build stage ----
# npm and its bundled internal packages (tar, brace-expansion, ip-address,
# etc.) are only needed here, to install dependencies. They never make it
# into the final image below, which removes them from what Trivy scans.
FROM node:22-alpine AS builder

WORKDIR /app

RUN apk update && apk upgrade --no-cache

COPY package.json ./
RUN npm install --omit=dev

COPY . .

# ---- Runtime stage ----
# Fresh, patched base image with no npm CLI at all - just Node.js and
# the app's own files/dependencies (currently none beyond core Node).
FROM node:22-alpine AS runtime

WORKDIR /app

RUN apk update && apk upgrade --no-cache \
    && rm -rf /usr/local/lib/node_modules/npm \
    && rm -f /usr/local/bin/npm /usr/local/bin/npx

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/index.js ./index.js

EXPOSE 3000

# Run node directly instead of "npm start" - npm is no longer in this image
CMD ["node", "index.js"]