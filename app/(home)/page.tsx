import Link from "next/link"
import { SAMPLE_API_URL_PREFIX } from "../../constants"

export const metadata = {
  title: 'HOME',
}

const URL = `${SAMPLE_API_URL_PREFIX}`

/**
 * 이 방식으로 하면, 자동으로 response 가 cache 되어, 페이지 재 진입시 로딩절차를 거치지 않음.
 */
const getMovies = async () => {
  return await (await fetch(URL)).json()  
}

export default async function Page() {
  const movies = await getMovies()
    return <div>
      {movies.map(movie => <li><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
    </div>
}