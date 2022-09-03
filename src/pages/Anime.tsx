import { useParams } from "@solidjs/router"
import { createEffect, createSignal } from "solid-js"
import { getAnimeByIdFull } from "../api/jikan/anime[id]"
import { IAnimeInfoFull } from "../interfaces/AnimeInfo"

export default function Anime() {
  const params = useParams()                             // Page parameters
  const [loading, setLoading] = createSignal(true)       // Is data being loaded
  const [info, setInfo] = createSignal<IAnimeInfoFull>() // data

  const fetchData = async () => {
    const data = await getAnimeByIdFull(parseInt(params.id)).then(data => data)
    setInfo(data)
    setLoading(false)
  }
  createEffect(() => fetchData())

  return <>
    <h1>Anime</h1>
    { loading() ? <p>Loading</p> : <div class="anime_info">
      <p>{ info()?.mal_id }</p>
      <p>{ info()?.title }</p>
      <p>{ info()?.episodes }</p>
      <p><a href={ info()?.url } target="_blank">MyAnimeList page</a></p>
    </div> }
  </>
}
