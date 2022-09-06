import { Component, createEffect, createSignal, For } from "solid-js"
import { IAnimeInfo } from "../interfaces/AnimeInfo"
import AnimePoster from "./AnimePoster"

interface IAnimeList {
  href: string | URL
  title: string
  limit: number
}

export default function AnimeList({title, href, limit}: IAnimeList) {
  const [loading, setLoading] = createSignal(true)
  const [animeList, setAnimeList] = createSignal<IAnimeInfo[]>([], { equals: false })

  const fetchData = async () => {
    const url = new URL(href)
    url.searchParams.append("page[limit]", limit.toString())

    const data = await fetch(url)
      .then(res => res.json())
      .then(json => json.data)
    setAnimeList(animeList => [...data, ...animeList])

    setLoading(false)
  } 
  createEffect(() => fetchData())
  
  return <>
    <h1>{ title }</h1>
    { loading() ? <p>Loading</p> : <For each={animeList()}>
      { data => <AnimePoster data={data}/> }
    </For> }
  </>
}
