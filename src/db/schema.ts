
import { date, integer, numeric, pgTable } from "drizzle-orm/pg-core";

export const twitch = pgTable("twitch", {
    id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
    followersNumbers: integer(),
    liveHours: integer(),
    viewsAverage: integer(),
    date: date()
})

export const youtube = pgTable("Youtube", {
    id: integer("id").generatedByDefaultAsIdentity().primaryKey(),
    followersNumbers: integer(),
    liveHours: integer(),
    viewsAverage: integer(),
    date: date()
})