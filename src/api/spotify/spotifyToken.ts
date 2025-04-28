import axios from "axios";

export class SpotifyToken {
  private static API = axios.create({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  public static async GetAcessToken() {
    try {
      const params = new URLSearchParams([
        ["grant_type", "client_credentials"],
        ["client_id", process.env.SPOTIFY_CLIENT_ID!],
        ["client_secret", process.env.SPOTIFY_CLIENT_SECRET!],
      ]);
      const response = await this.API.post(
        "https://accounts.spotify.com/api/token",
        params
      );

      const tokenResponse = await response.data;
      console.log(tokenResponse);
    } catch (error) {
      console.log("deu erro no GetAcessToken");
      throw error;
    }
  }
}
