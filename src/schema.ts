import { v4 } from '@lukeed/uuid/secure'
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

function genUUID() {
  return text("id").primaryKey().$defaultFn(() => v4())
}

function commonColumns() {
  return {
    id: genUUID(),
    createdAt: text("created_at").default(sql`(datetime('now', 'localtime'))`),
    updatedAt: text("updated_at").default(sql`(datetime('now', 'localtime'))`),
  }
}

export const users = sqliteTable("users", {
  ...commonColumns(),
  username: text("username").unique().notNull(),
  nickname: text("nickname"),
  hashedPassword: text("hashed_password").notNull()
});

export const apps = sqliteTable('apps', {
  ...commonColumns(),
  name: text('name'),
  appId: text('app_id').unique().notNull(),
  appSecret: text('app_secret').unique().notNull(),
  creatorId: integer('creator_id').notNull().references(() => users.id),
})

export const messageTemplates = sqliteTable('message_templates', {
  ...commonColumns(),
  code: text('code').notNull(),
  message: text('message').notNull(),
  appId: integer('app_id').notNull().references(() => apps.id)
})

export const pushHistories = sqliteTable('push_histories', {
  ...commonColumns(),
  templateId: integer('template_id').notNull().references(() => messageTemplates.id),
  phone: text('phone').notNull(),
  params: text('params')
});