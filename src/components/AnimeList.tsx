import { Component, createEffect, createSignal, For } from "solid-js"
import { IAnimeInfo } from "../interfaces/AnimeInfo"
import AnimePoster from "./AnimePoster"

interface IAnimeList {
  title: string
  order: string
}

export default function AnimeList({title, order}: IAnimeList) {
  const [loading, setLoading] = createSignal(true)
  const [animeList, setAnimeList] = createSignal<IAnimeInfo[]>([], { equals: false })

  const fetchData = async () => {
    // setAnimeList(animeList => [...data, ...animeList])

    // setLoading(false)
  } 
  createEffect(() => fetchData())
  
  return <>
    <h1>{ title }</h1>
    { loading() ? <p>Loading</p> : <For each={animeList()}>
      { data => <AnimePoster data={data}/> }
    </For> }
  </>
}
