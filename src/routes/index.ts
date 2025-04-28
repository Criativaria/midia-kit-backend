import { Router } from "express";
import { twitchRouter } from "./twitch-routes";
import { youtubeRouter } from "./youtube-routes";

const appRoutes = Router();

appRoutes.use("/twitch", twitchRouter);
appRoutes.use("/youtube", youtubeRouter);
export { appRoutes };
