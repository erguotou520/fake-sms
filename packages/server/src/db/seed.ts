import { db } from "./";
import * as schema from "./schema";

await db.insert(schema.users).values([{
  username: 'admin',
  nickname: 'Admin',
  hashedPassword: await Bun.password.hash('Pa$$wo2d'),
}
]);

console.log("Seeding complete.");
