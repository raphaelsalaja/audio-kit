ALTER TABLE "patches" ALTER COLUMN "tags" SET DEFAULT '{}';--> statement-breakpoint
ALTER TABLE "patches" ADD COLUMN IF NOT EXISTS "version" text;--> statement-breakpoint
ALTER TABLE "patches" ADD COLUMN IF NOT EXISTS "updated_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "patches" ADD COLUMN IF NOT EXISTS "license" text;--> statement-breakpoint
ALTER TABLE "patches" ADD COLUMN IF NOT EXISTS "compatibility" text;--> statement-breakpoint
ALTER TABLE "patches" ADD COLUMN IF NOT EXISTS "featured" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "patches" ADD COLUMN IF NOT EXISTS "verified" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "patches" ADD COLUMN IF NOT EXISTS "forked_from" integer;--> statement-breakpoint
ALTER TABLE "patches" ADD COLUMN IF NOT EXISTS "source_types" text[] DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE "patches" ADD COLUMN IF NOT EXISTS "has_effects" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "patches" ADD COLUMN IF NOT EXISTS "has_layers" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "patches" ADD COLUMN IF NOT EXISTS "file_size" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "patches" ADD CONSTRAINT "patches_forked_from_fkey" FOREIGN KEY ("forked_from") REFERENCES "public"."patches"("id") ON DELETE no action ON UPDATE no action;
