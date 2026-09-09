# ---- Runtime stage ----
FROM node:22-alpine AS runtime

WORKDIR /app

RUN apk update && apk upgrade --no-cache \
    && rm -rf /usr/local/lib/node_modules/npm \
    && rm -f /usr/local/bin/npm /usr/local/bin/npx \
    && addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/index.js ./index.js

# Make sure the app files are owned by the non-root user
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["node", "index.js"]