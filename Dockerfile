# Stage 1: build the static website
FROM node:20-alpine AS build
LABEL org.opencontainers.image.description="BDX / IO / NOTES — carnets de conférence par édition."
WORKDIR /app
COPY package.json ./
COPY scripts ./scripts
COPY public ./public
COPY data ./data
COPY content ./content
COPY README.md ./
RUN node scripts/build.mjs && node scripts/check.mjs

# Stage 2: runtime
FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/scripts/serve.mjs ./scripts/serve.mjs
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
CMD ["node", "scripts/serve.mjs"]
