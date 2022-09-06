import AnimeList from "../components/AnimeList"

export default function Home() {
  return <>
    <h1>Home</h1>
    <div class="content">
      <AnimeList title="Trending" href="https://kitsu.io/api/edge/trending/anime" limit={20} />
    </div>
  </>
}
