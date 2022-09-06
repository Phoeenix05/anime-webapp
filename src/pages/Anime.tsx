import { useParams } from "@solidjs/router"
import { createEffect, createSignal } from "solid-js"
import { getAnimeById } from "../api/KitsuAnime"
import AnimePoster from "../components/AnimePoster"
import { IAnimeInfo } from "../interfaces/AnimeInfo"

export default function Anime() {
  const params = useParams()                         // Page parameters
  const [loading, setLoading] = createSignal(true)   // Is data being loaded
  const [info, setInfo] = createSignal<IAnimeInfo>() // data

  const fetchData = async () => {
    const data = await getAnimeById(parseInt(params.id)).then(data => data)
    setInfo(data)
    setLoading(false)
  }
  createEffect(() => fetchData())

  return <>
    <h1>Anime</h1>
    { loading() ? <p>Loading</p> : <AnimePoster data={info()}></AnimePoster> }
  </>
}
