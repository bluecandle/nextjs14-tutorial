import Link from "next/link"
import { SAMPLE_API_URL_PREFIX } from "../../constants"
import Movie from "../../components/movie"
import styles from "../../styles/home.module.css"

export const metadata = {
  title: 'HOME',
}

// page.tsx 에서는 허용된 것들만 export 가 가능하다고 한다.
const URL = `${SAMPLE_API_URL_PREFIX}`

/**
 * 이 방식으로 하면, 자동으로 response 가 cache 되어, 페이지 재 진입시 로딩절차를 거치지 않음.
 */
const getMovies = async () => {
  return await (await fetch(URL)).json()  
}

export default async function Page() {
  const movies = await getMovies()
  return <div className={styles.container}>
    {movies.map((movie) => (
      <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path} />
))}

  </div>
}