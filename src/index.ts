import "express-async-errors";
import "dotenv/config";
import { Pool } from "pg";
import express from "express";
import cors from "cors";
import { appRoutes } from "./routes/index";
import { drizzle } from "drizzle-orm/node-postgres";
import "./utils/cron";
import { SpotifyToken } from "./api/spotify/spotifyToken";
import { SpotifyApi } from "./api/spotify/spotify";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
export const db = drizzle({ client: pool });
const server = express();

server.use(cors());
server.use(express.json());
server.use(appRoutes);

server.listen(process.env.PORT, () => console.log("servidor abrido"));

SpotifyApi.GetUserTopItems();
SpotifyToken.GetAcessToken();
