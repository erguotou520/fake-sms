import { Elysia } from 'elysia'

const port = process.env.PORT || 7878
new Elysia()
  .get('/', () => 'Hello, fake-sms!')
  .post('/login', () => '')

  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  })
