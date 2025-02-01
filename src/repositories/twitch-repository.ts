import { db } from "..";
import { twitch } from "../db/schema";
import { TwitchService } from "../services/twitch-service";
import { InferInsertModel } from "drizzle-orm"

export class TwitchRepository {

    public static async getMetrics() {
        return await db.select().from(twitch);
    }

    public static updateMetrics(metrics: InferInsertModel<typeof twitch>) {
        return db.insert(twitch).values(metrics);
    }
}