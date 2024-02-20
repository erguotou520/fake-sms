FROM oven/bun:1-slim as builder
WORKDIR /app
COPY package.json .
RUN bun install --prod
COPY . .
RUN bun run build
RUN rm -rf src
RUN rm -rf bun.lockb
COPY ./src/db/ /app/src/db/
RUN mkdir -p /app/db && chown -R 1000:1000 /app/db

FROM oven/bun:1-slim AS release
WORKDIR /app
COPY --from=builder /app/ /app/
USER bun
ENV NODE_ENV production
VOLUME ["/app/db"]
EXPOSE 7878/tcp
ENTRYPOINT ["sh", "start.sh"]
