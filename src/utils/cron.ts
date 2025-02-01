import cron from 'node-cron';
import { YoutubeService } from '../services/youtube-service';
import { TwitchService } from '../services/twitch-service';

cron.schedule('0 0 * * *', async () => {
    await TwitchService.updateMetrics();
    await YoutubeService.updateMetrics();
}).start()