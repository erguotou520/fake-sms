import { migrate } from "drizzle-orm/bun-sqlite/migrator";

import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { databasePath } from "./db";

const sqlite = new Database(databasePath);
const db = drizzle(sqlite);
await migrate(db, { migrationsFolder: "./drizzle" });
