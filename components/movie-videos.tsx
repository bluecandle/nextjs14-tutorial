import { SAMPLE_API_URL_PREFIX } from "../constants"
import styles from "../styles/movie-videos.module.css";

const getVideos = async (id: string) => {
  const url = `${SAMPLE_API_URL_PREFIX}/${id}/videos`
  const response = await fetch(url)
  return response.json()
  // throw new Error('Something Broke')
}

export default async function MovieVideos({id}:{id:string}) {
    
  const videos = await getVideos(id)
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  )
}