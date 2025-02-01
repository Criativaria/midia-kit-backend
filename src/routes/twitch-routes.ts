import { Router } from "express";
import { TwitchControler } from "../controller/twitch-controller";


const twitchRouter = Router();

twitchRouter.get('/', TwitchControler.getTwitchMetrics)

export { twitchRouter }