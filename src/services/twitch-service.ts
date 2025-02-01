import { TwitchApi } from "../api/twitch/twitch-api";
import { twitch } from "../db/schema";
import { TwitchRepository } from "../repositories/twitch-repository";
import { HoursTreatment } from "../utils/hours-treatment";
// import { HoursTreatment } from "../utils/hours-treatment";


export class TwitchService {

    public static async getMetrics() {
        const metrics = await TwitchRepository.getMetrics()
        if (metrics.length === 0) {
            return console.log(" 204, não consegui puxar os dados da twitch no banco");
        }
        return metrics;
    }

    public static async updateMetricsDate() {
        return new Date().toISOString();
    }

    public static async updateViewsAverageMetrics() {

        const videos = await TwitchApi.GetVideos();

        const allVods = videos.data.map(vod => vod.view_count).slice(0, 16)

        const viewsSum = allVods.reduce((total: number, view: number) => total + view)

        const average = viewsSum / allVods.length;

        return parseInt(average.toFixed(0))
    }

    public static async updateLiveHoursMetrics() {

        const videos = await TwitchApi.GetVideos();

        const hoursArray = videos.data.map((object) => {
            return HoursTreatment(object.duration)
        }).slice(0, 16)

        const hrsSum = hoursArray.reduce((total: number, hr: number) => total + hr);

        return hrsSum
    }

    public static async updateFollowers() {
        const followers = await TwitchApi.GetFollowers()
        return followers.total
    }

    public static async updateMetrics() {

        const viewsAverage = await this.updateViewsAverageMetrics()
        const liveHours = await this.updateLiveHoursMetrics()
        const followers = await this.updateFollowers()
        const date = await this.updateMetricsDate()

        return TwitchRepository.updateMetrics({
            followersNumbers: followers,
            liveHours: liveHours,
            viewsAverage: viewsAverage,
            date: date
        })
    }

}