import { Request, Response } from "express";
import { TwitchService } from "../services/twitch-service";

export class TwitchControler {

    public static async getTwitchMetrics(req: Request, res: Response) {
        const metrics = await TwitchService.getMetrics();
        res.json(metrics);
    }

}