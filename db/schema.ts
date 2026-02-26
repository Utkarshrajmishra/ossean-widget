import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  uuid,
  timestamp,
  integer,
  index,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const organization = pgTable("organization", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),

  name: text("name").notNull(),

  created_at: timestamp("created_at").default(sql`now()`),
});

export const organizationRelations = relations(organization, ({ many }) => ({
  users: many(user),
  projects: many(project),
  feedbacks: many(feedback),
}));

export const user = pgTable(
  "user",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),

    organization_id: uuid("organization_id")
      .notNull()
      .references(() => organization.id, { onDelete: "cascade" }),

    name: text("name"),
    email: text("email").notNull().unique(),
    image: text("image"),

    created_at: timestamp("created_at").default(sql`now()`),
  },
  (table) => ({
    orgIndex: index("user_organization_idx").on(table.organization_id),
  }),
);

export const userRelations = relations(user, ({ one }) => ({
  organization: one(organization, {
    fields: [user.organization_id],
    references: [organization.id],
  }),
}));

export const project = pgTable(
  "project",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),

    organization_id: uuid("organization_id")
      .notNull()
      .references(() => organization.id, { onDelete: "cascade" }),

    websiteLink: text("website").notNull(),
    name: text("name").notNull(),

    created_at: timestamp("created_at").default(sql`now()`),
  },
  (table) => ({
    orgIndex: index("project_organization_idx").on(table.organization_id),
  }),
);

export const projectRelations = relations(project, ({ one, many }) => ({
  organization: one(organization, {
    fields: [project.organization_id],
    references: [organization.id],
  }),
  feedbacks: many(feedback),
  theme: one(widgetTheme),
}));

export const feedback = pgTable(
  "feedback",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),

    organization_id: uuid("organization_id")
      .notNull()
      .references(() => organization.id, { onDelete: "cascade" }),

    project_id: uuid("project_id")
      .notNull()
      .references(() => project.id, { onDelete: "cascade" }),

    tag: text("tag").notNull(),
    email: text("email").notNull(),
    name: text("name").notNull(),
    message: text("message").notNull(),

    rating: integer("rating").notNull().default(0),
    image_Url: text("image_url"),
    created_at: timestamp("created_at").default(sql`now()`),
  },
  (table) => ({
    orgIndex: index("feedback_organization_idx").on(table.organization_id),
    projectIndex: index("feedback_project_idx").on(table.project_id),
  }),
);

export const feedbackRelations = relations(feedback, ({ one }) => ({
  organization: one(organization, {
    fields: [feedback.organization_id],
    references: [organization.id],
  }),
  project: one(project, {
    fields: [feedback.project_id],
    references: [project.id],
  }),
}));

export const widgetTheme = pgTable(
  "widget_theme",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),

    project_id: uuid("project_id")
      .notNull()
      .references(() => project.id, { onDelete: "cascade" }),

    primary_color: text("primary_color").default("#000000"),
    background_color: text("background_color").default("#ffffff"),
    text_color: text("text_color").default("#111111"),
    border_radius: integer("border_radius").default(8),
    position: text("position").default("bottom-right"),

    is_feedback: boolean("is_feedback").notNull().default(true),
    is_bug: boolean("is_bug").notNull().default(true),
    is_feature: boolean("is_feature").notNull().default(true),
    is_rating: boolean("is_rating").notNull().default(true),

    created_at: timestamp("created_at").default(sql`now()`),
  },
  (table) => ({
    projectIndex: index("widget_project_idx").on(table.project_id), // ✅ indexed widget id
  }),
);

export const widgetThemeRelations = relations(widgetTheme, ({ one }) => ({
  project: one(project, {
    fields: [widgetTheme.project_id],
    references: [project.id],
  }),
}));
