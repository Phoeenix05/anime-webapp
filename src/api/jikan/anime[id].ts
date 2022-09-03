import { IAnimeInfo, IAnimeInfoFull } from "../../interfaces/AnimeInfo"
import { getTimeoutController } from "../util/timeoutController"

/**
 * It takes an id as a parameter, and returns an object with the id, url, title, and episodes of the
 * anime
 * @param {number} id - The id of the anime you want to get.
 * @returns An object with the following properties:
 *   mal_id: number
 *   url: string
 *   title: string
 *   episodes: number
 */
export const getAnimeById = async (id: number): Promise<IAnimeInfo> => {
  const data = await getAnimeByIdFull(id).then(data => data)
  return {
    mal_id: data.mal_id,
    url: data.url,
    title: data.title,
    episodes: data.episodes
  }
}

/**
 * It fetches the full information of an anime by its id, and returns the data
 * @param {number} id - number - The ID of the anime you want to get information about.
 * @returns An object with the following properties:
 */
export const getAnimeByIdFull = async (id: number): Promise<IAnimeInfoFull> => {
  const [controller, timeoutId] = getTimeoutController()
  const data: IAnimeInfoFull = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`, { signal: controller.signal })
    .then(res => res.json())
    .then(json => json.data)

  clearTimeout(timeoutId)

  return data
}
