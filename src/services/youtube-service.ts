import { YoutubeApi } from "../api/youtube/youtube-api";
import { YoutubeRepository } from "../repositories/youtube-repository";
import { HoursTreatment } from "../utils/hours-treatment";

export class YoutubeService {

    public static async getMetrics() {

        const metrics = await YoutubeRepository.getYoutubeMetrics();

        if (!metrics.length) {
            return console.log(" 204, não consegui puxar os dados do youtube no banco");
        }
        return metrics;
    }


    public static async updateMetricsDate() {
        return new Date().toISOString();
    }

    public static async updateViewsAverageViewsMetrics() {

        const playlistVideos = await YoutubeApi.getPlaylistItens();

        const videosIds = playlistVideos.items.map((item) => {
            return item.snippet.resourceId.videoId
        })

        const Views = Promise.all(videosIds.map(async (id) => {
            const stringArray = (await YoutubeApi.getVideos(id)).items[0].statistics.viewCount
            return parseInt(stringArray)
        }))

        const viewsSum = (await Views).reduce((total: number, views: number) => total + views);
        const average = (viewsSum / (await Views).length).toFixed(0)
        return parseInt(average)
    }

    public static async updateLiveHoursMetrics() {

        const playlistVideos = await YoutubeApi.getPlaylistItens();

        const videosIds = playlistVideos.items.map((item) => {
            return item.snippet.resourceId.videoId
        })

        const videosDurations = Promise.all(videosIds.map(async (id) => {
            return (await (YoutubeApi.getVideos(id))).items[0].contentDetails.duration
        }))

        const hrsArray = (await videosDurations).map((hr: string) => HoursTreatment(hr))
        const hrsSum = hrsArray.reduce((total: number, hr: number) => total + hr)

        return hrsSum
    }

    public static async updateFollowersMetrics() {
        const playlistVideos = await YoutubeApi.getSubscribers();
        return parseInt(playlistVideos.items[0].statistics.subscriberCount);
    }

    public static async updateMetrics() {
        const liveHours = await this.updateLiveHoursMetrics()
        const followers = await this.updateFollowersMetrics()
        const viewsAverage = await this.updateViewsAverageViewsMetrics()
        const date = await this.updateMetricsDate()

        return YoutubeRepository.updateMetrics({
            followersNumbers: followers,
            liveHours: liveHours,
            viewsAverage: viewsAverage,
            date: date
        })
    }
}