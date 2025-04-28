import axios from "axios";
import { SpotifyToken } from "./spotifyToken";
//se o token for invalido chamar a função pra atualizar o token

export class SpotifyApi {
  private static async GetAuth() {
    let response = await SpotifyToken.GetAcessToken();

    return response;
  }
  //   private static API = axios.create({
  //     headers: {

  //     },
  //   });

  public static async GetUserTopItems() {
    console.log(this.GetAuth());
    // try {
    //   const params = new URLSearchParams([
    //     ["grant_type", "client_credentials"],
    //     ["client_id", process.env.SPOTIFY_CLIENT_ID!],
    //     ["client_secret", process.env.SPOTIFY_CLIENT_SECRET!],
    //   ]);
    //   const response = await this.API.post(
    //     "https://accounts.spotify.com/api/token",
    //     params
    //   );
    //   console.log(response.data);
    // } catch (error) {
    //   console.log("deu erro no GetAcessToken");
    //   throw error;
    // }
  }
}
