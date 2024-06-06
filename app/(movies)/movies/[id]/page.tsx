import { SAMPLE_API_URL_PREFIX } from "../../../../constants"

export const metadata = {
  title: 'Movie Detail',
}

const getMovie = async (id: string) => {
  const url = `${SAMPLE_API_URL_PREFIX}/${id}`
  console.log(`url ${url}`)
  const response = await fetch(url)
  return response.json()
}

const getVideos = async (id: string) => {
  const url = `${SAMPLE_API_URL_PREFIX}/${id}/videos`
  const response = await fetch(url)
return response.json()
}

export default async function MovieDetailPage({params:{id}}:{params:{id:string}}) {
  // const movie = await getMovie(id)
  // const videos = await getVideos(id)

  const [movie, videos] = await Promise.all([getMovie(id),getVideos(id)])
    
  return <>
    <h1>{movie.title}</h1>
  </>
    
}