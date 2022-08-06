import { IAnimeInfo } from "../../interfaces/AnimeInfo"
import { getTimeoutController } from "../util/timeoutController"

export const getAnimeById = async (id: number): Promise<IAnimeInfo> => {
  const [controller, timeoutId] = getTimeoutController()
  const data = await fetch(`https://api.jikan.moe/v4/anime/${id}`, { signal: controller.signal })
    .then(res => res.json())
    .then(json => json.data)

  clearTimeout(timeoutId)

  return {
    mal_id: data.mal_id,
    url: data.url,
    title: data.title,
    episodes: data.episodes
  }
}
