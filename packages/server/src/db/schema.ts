import { v4 } from '@lukeed/uuid/secure'
import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text, unique } from "drizzle-orm/sqlite-core";

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
})

export const apps = sqliteTable('apps', {
  ...commonColumns(),
  name: text('name'),
  appId: text('app_id').notNull(),
  appSecret: text('app_secret').notNull(),
  creatorId: text('creator_id').notNull().references(() => users.id),
}, apps => ({
  unq: unique().on(apps.appId, apps.appSecret)
}))

export const messageTemplates = sqliteTable('message_templates', {
  ...commonColumns(),
  code: text('code').notNull(),
  message: text('message').notNull(),
  appId: text('app_id').notNull().references(() => apps.id)
})

export const pushHistories = sqliteTable('push_histories', {
  ...commonColumns(),
  templateId: text('template_id').notNull().references(() => messageTemplates.id),
  phone: text('phone').notNull(),
  params: text('params'),
  text: text('text'),
})

export const usersRelations = relations(users, ({ many }) => ({
  apps: many(apps)
}))

export const appsRelations = relations(apps, ({ one, many }) => ({
  creator: one(users, {
    fields: [apps.creatorId],
    references: [users.id]
  }),
  messageTemplates: many(messageTemplates)
}))

export const messageTemplatesRelations = relations(messageTemplates, ({ one, many }) => ({
  app: one(apps, {
    fields: [messageTemplates.appId],
    references: [apps.id]
  }),
  pushHistories: many(pushHistories)
}))

export const pushHistoriesRelations = relations(pushHistories, ({ one }) => ({
  template: one(messageTemplates, {
    fields: [pushHistories.templateId],
    references: [messageTemplates.id]
  })
}))
