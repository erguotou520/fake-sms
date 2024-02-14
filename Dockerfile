FROM oven/bun:1 as builder
WORKDIR /app
COPY packages/server/package.json /app/package.json
RUN bun install
COPY packages/server/ /app/
RUN bun install

# copy production dependencies and source code into final image
FROM oven/bun:1 AS release
WORKDIR /app
COPY --from=builder /app/ /app/
USER bun
EXPOSE 7878/tcp
VOLUME ["/app/db"]
ENTRYPOINT ["sh", "start.sh"]
