import { useParams } from "@solidjs/router"
import { createEffect, createSignal } from "solid-js"

export interface IAnimeInfo {
  mal_id: number,
  url: string,
  title: string,
  episodes: number
}

export default function Anime() {
  const params = useParams()                         // Page parameters
  const [loading, setLoading] = createSignal(true)   // Is data being loaded
  const [info, setInfo] = createSignal<IAnimeInfo>() // data

  const fetchData = async () => {
    const data = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`)
      .then(res => res.json())
      .then(json => json.data)
    
    setInfo({
      mal_id: data.mal_id,
      url: data.url,
      title: data.title,
      episodes: data.episodes
    })
    
    setLoading(false)
  }
  createEffect(() => fetchData())

  return <>
    <h1>Anime</h1>
    { loading() ? <p>Loading</p> : <div class="anime_info">
      <p>{ info()?.mal_id }</p>
      <p>{ info()?.title }</p>
      <p>{ info()?.episodes }</p>
      <p><a href={ info()?.url }>MyAnimeList page</a></p>
    </div> }
  </>
}
