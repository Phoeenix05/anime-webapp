import { useParams } from "@solidjs/router"
import AnimeList from "../components/AnimeList"

export default function Search() {  
  const params = useParams()

  const url = new URL("https://kitsu.io/api/edge/anime")
  url.searchParams.append("filter[text]", params.name)

  return <>
    <AnimeList title="Search" href={url.href} limit={20} />
  </>
}
