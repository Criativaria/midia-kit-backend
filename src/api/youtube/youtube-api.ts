import axios from "axios";
import { YoutubeGetSubs } from "./dto/get-subs";
import { YoutubeGetVideos } from "./dto/get-videos";
import { YoutubeGetPlaylistItens } from "./dto/get-playlist-itens";
export class YoutubeApi {

    private static API = axios.create({
        baseURL: "https://youtube.googleapis.com/youtube/v3",
        params: {
            key: process.env.YOUTUBE_API_KEY
        }
    })

    public static async getSubscribers() {
        try {
            const channels = await this.API.get<YoutubeGetSubs>(`/channels`, {
                params: {
                    part: "snippet,contentDetails,statistics",
                    id: "UCLbLomtio10U_Ia3pbvjIhA"
                }
            })

            return channels.data

        } catch (error) {
            console.log("deu erro no getChannels do youtube");
            throw error;
        }
    }

    public static async getVideos(videoId: string) {
        try {
            const videos = await this.API.get<YoutubeGetVideos>(`/videos`, {
                params: {
                    part: "snippet,contentDetails,statistics",
                    id: videoId
                }
            })

            return videos.data

        } catch (error) {
            console.log("deu erro no getVideos do youtube");
            throw error;
        }
    }

    public static async getPlaylistItens() {
        try {
            const itens = await this.API.get<YoutubeGetPlaylistItens>(`/playlistItems`, {
                params: {
                    part: "snippet,contentDetails",
                    maxResults: "15",
                    playlistId: "PLFy__3Ws2dcHScTT_PoxnSoWzzpSjWrzW"
                }
            })

            return itens.data

        } catch (error) {
            console.log("deu erro no getPlaylistItens do youtube");
            throw error;
        }
    }

}