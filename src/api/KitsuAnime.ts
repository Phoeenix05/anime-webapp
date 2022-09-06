import { IAnimeInfo } from "../interfaces/AnimeInfo"
import { getTimeoutController } from "./ApiUtils"

/**
 * It fetches the data from the url, and then parses the response to json, and then returns the data
 * @param {number} id - The id of the anime you want to get.
 * @returns An object with the following properties:
 *   - id: number
 *   - type: string
 *   - links: object
 *   - attributes: object
 *   - relationships: object
 *   - meta: object
 *   - included: object
 */
export const getAnimeById = async (id: number): Promise<IAnimeInfo> => {
  const [controller, timeoutId] = getTimeoutController()
  const url = new URL(`https://kitsu.io/api/edge/anime/${id}`)

  // Fetching the data from the url, and then parsing the response to json, and then returning the data.
  const data: IAnimeInfo = await fetch(url, { signal: controller.signal })
    .then(res => res.json())
    .then(json => json.data)

  clearTimeout(timeoutId)

  return data
}
