import { Suspense } from "react"
import MovieInfo from "../../../../components/movie-info"
import { SAMPLE_API_URL_PREFIX } from "../../../../constants"
import MovieVideos from "../../../../components/movie-videos"

export const metadata = {
  title: 'Movie Detail',
}

export default async function MovieDetailPage({params:{id}}:{params:{id:string}}) {
  // const movie = await getMovie(id)
  // const videos = await getVideos(id)
    
  return <div>
    <h3>Movie Detail Page</h3>
    <Suspense fallback={<h1>Loading Movie Info</h1>}>
      <MovieInfo id={id} />
    </Suspense>
    <Suspense fallback={<h1>Loading Movie Videos</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  </div>      
}