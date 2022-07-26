export const serchAnimeByName = async (name: String) => {
  return fetch(`https://api.jikan.moe/v4/anime?q=${name}`)
    .then(res => res.json())
    .catch(error => error)
}

export const getAnimeById = async (id: Number) => {
  return fetch(`https://api.jikan.moe/v4/anime/${id}`)
    .then(res => res.json())
    .catch(error => error)
}