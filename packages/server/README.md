# fake-sms server

Powered by [Bun](https://bun.sh) as runtime & [elysia](https://elysiajs.com/essential/scope) as framework & [drizzle orm](https://orm.drizzle.team/docs/rqb) as orm framework.

## Development

### Database Migrations

```bash
bun run schema
bun run migrate
# if you need seed data
bun run seed
```

### Develop

```bash
bun run dev
```

### Build

```bash
bun run build
# if you want a single-file executable binary
bun run build:exec
```
