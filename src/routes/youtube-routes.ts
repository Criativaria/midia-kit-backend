import { Router } from "express";
import { YoutubeController } from "../controller/youtube-controller";

const youtubeRouter = Router();

youtubeRouter.get("/", YoutubeController.getYoutubeMetrics)

export { youtubeRouter }