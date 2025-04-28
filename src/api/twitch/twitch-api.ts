import { TwitchGetFollowers } from "./dto/get-followers";
import { TwitchGetVideos } from "./dto/get-videos";
import axios from "axios";

type twitchVod = {
  view_count: number;
  duration: string;
};

export class TwitchApi {
  private static API = axios.create({
    baseURL: "https://api.twitch.tv/helix",
    headers: {
      Authorization: process.env.TWITCH_AUTHORIZATION,
      "Client-Id": process.env.TWITCH_CLIENT_ID,
    },
  });

  public static async GetFollowers() {
    try {
      const followers = await this.API.get<TwitchGetFollowers>(
        "/channels/followers",
        {
          params: {
            broadcaster_id: "783218269",
          },
        }
      );

      return followers.data;
    } catch (error) {
      console.log("deu erro no getfollowers da twitch");
      throw error;
    }
  }

  public static async GetVideos() {
    try {
      const videos = await this.API.get<TwitchGetVideos>("/videos", {
        params: {
          user_id: "783218269",
        },
      });

      return videos.data;
    } catch (error) {
      console.log("deu erro no getvideos da twitch");
      throw error;
    }
  }
}
