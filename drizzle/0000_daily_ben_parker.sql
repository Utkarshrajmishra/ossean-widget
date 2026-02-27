CREATE TABLE "feedback" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"organization_id" text NOT NULL,
	"project_id" uuid NOT NULL,
	"tag" text NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"message" text NOT NULL,
	"rating" integer DEFAULT 0 NOT NULL,
	"image_url" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "project" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"organization_id" text NOT NULL,
	"website" text NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"organization_id" text NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "widget_theme" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"primary_color" text DEFAULT '#000000',
	"background_color" text DEFAULT '#ffffff',
	"text_color" text DEFAULT '#111111',
	"border_radius" integer DEFAULT 8,
	"position" text DEFAULT 'bottom-right',
	"is_feedback" boolean DEFAULT true NOT NULL,
	"is_bug" boolean DEFAULT true NOT NULL,
	"is_feature" boolean DEFAULT true NOT NULL,
	"is_rating" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "widget_theme" ADD CONSTRAINT "widget_theme_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "feedback_organization_idx" ON "feedback" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "feedback_project_idx" ON "feedback" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX "project_organization_idx" ON "project" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "user_organization_idx" ON "user" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "widget_project_idx" ON "widget_theme" USING btree ("project_id");