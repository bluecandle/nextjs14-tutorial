import styles from "../styles/movie-info.module.css";
import { SAMPLE_API_URL_PREFIX } from "../constants"

export const getMovie = async (id: string) => {
  const url = `${SAMPLE_API_URL_PREFIX}/${id}`
  console.log(`url ${url}`)
  const response = await fetch(url)
  return response.json()
}

export default async function MovieInfo({id}:{id:string}) {
    
    const movie = await getMovie(id)
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  )
    
  
    
}