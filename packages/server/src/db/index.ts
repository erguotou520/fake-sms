import { Database } from 'bun:sqlite'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import * as schema from './schema'

export const databasePath = './db/sqlite.db'

const sqlite = new Database(databasePath)
export const db = drizzle(sqlite, { schema })
