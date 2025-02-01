import { InferInsertModel } from "drizzle-orm";
import { db } from "..";
import { youtube } from "../db/schema";
import { YoutubeService } from "../services/youtube-service";

export class YoutubeRepository {

    public static async getYoutubeMetrics() {
        const metrics = db.select().from(youtube);
        return metrics;
    }

    public static async updateMetrics(metrics: InferInsertModel<typeof youtube>) {
        return db.insert(youtube).values(metrics)

    }
}