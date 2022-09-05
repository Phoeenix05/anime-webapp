import { IAnimeInfo, IAnimeInfoFull } from "../../interfaces/AnimeInfo"
import { getTimeoutController } from "../util/timeoutController"
import { X_MAL_CLIENT_ID } from "../../env"

const headers: any = {
  "Content-Type": "application/json",
  "X-MAL-CLIENT-ID": X_MAL_CLIENT_ID
}

/**
 * It fetches an anime by its ID, and returns the data
 * @param {number} id - number - The ID of the anime you want to get information about.
 * @returns A promise that resolves to an object of type IAnimeInfo
 */
export const getAnimeById = async (id: number): Promise<IAnimeInfo> => {
  const [controller, timeoutId] = getTimeoutController()
  const url = new URL(`https://api.myanimelist.net/v2/anime/${id}`)
  url.searchParams.append("fields", "id,title,main_picture,start_date,synopsis,mean,media_type,genres,num_episodes,rating")

  const data: IAnimeInfo = await fetch(url, { method: "GET", signal: controller.signal, headers: headers })
    .then(res => res.json())
    .then(json => json.data)

  clearTimeout(timeoutId)

  return data
}

/**
 * It fetches the full information of an anime by its id, and returns the data
 * @param {number} id - number - The ID of the anime you want to get information about.
 * @returns An object with the following properties:
 */
export const getAnimeByIdFull = async (id: number): Promise<IAnimeInfoFull> => {
  const [controller, timeoutId] = getTimeoutController()
  const url = new URL(`https://api.myanimelist.net/v2/anime/${id}`)
  url.searchParams.append("fields", "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics")

  const data: IAnimeInfoFull = await fetch(url, { method: "GET", signal: controller.signal, headers: headers })
    .then(res => res.json())
    .then(json => json.data)

  clearTimeout(timeoutId)

  return data
}
