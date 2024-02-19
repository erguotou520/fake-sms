import { eq } from 'drizzle-orm'
import { db } from './'
import * as schema from './schema'

const adminUser = await db.query.users.findFirst({
  where: eq(schema.users.username, 'admin')
})

if (!adminUser) {
  await db.insert(schema.users).values([
    {
      username: 'admin',
      nickname: 'Admin',
      hashedPassword: await Bun.password.hash('Pa$$wo2d')
    }
  ])
}

console.log('Seeding complete.')
