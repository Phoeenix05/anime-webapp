import { IAnimeInfo } from "../interfaces/AnimeInfo"

interface IAnimePoster {
  data: IAnimeInfo
}

export default function AnimePoster({data}: IAnimePoster) {
  return <div class="anime__poster">
    <p>{ data.id }</p>
    <p>{ data.title }</p>
  </div>
}
