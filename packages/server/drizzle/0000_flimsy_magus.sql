CREATE TABLE `apps` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT (datetime('now', 'localtime')),
	`updated_at` text DEFAULT (datetime('now', 'localtime')),
	`name` text,
	`app_id` text NOT NULL,
	`app_secret` text NOT NULL,
	`creator_id` text NOT NULL,
	FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `message_templates` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT (datetime('now', 'localtime')),
	`updated_at` text DEFAULT (datetime('now', 'localtime')),
	`code` text NOT NULL,
	`message` text NOT NULL,
	`app_id` text NOT NULL,
	FOREIGN KEY (`app_id`) REFERENCES `apps`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `push_histories` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT (datetime('now', 'localtime')),
	`updated_at` text DEFAULT (datetime('now', 'localtime')),
	`app_id` text NOT NULL,
	`template_id` text,
	`phone` text NOT NULL,
	`params` text,
	`text` text,
	FOREIGN KEY (`app_id`) REFERENCES `apps`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`template_id`) REFERENCES `message_templates`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT (datetime('now', 'localtime')),
	`updated_at` text DEFAULT (datetime('now', 'localtime')),
	`username` text NOT NULL,
	`nickname` text,
	`hashed_password` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `apps_app_id_app_secret_unique` ON `apps` (`app_id`,`app_secret`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);