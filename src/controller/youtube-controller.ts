import { Request, Response } from "express";
import { YoutubeService } from "../services/youtube-service";

export class YoutubeController {

    public static async getYoutubeMetrics(req: Request, res: Response) {
        const metrics = YoutubeService.getMetrics()
        res.json(metrics)
    }
}