import { Suspense } from "react"
import MovieInfo, { getMovie } from "../../../../components/movie-info"
import { SAMPLE_API_URL_PREFIX } from "../../../../constants"
import MovieVideos from "../../../../components/movie-videos"

interface IParams{
  params: { id: string };
}
/**
 * 예약된 이름!
 * 그리고 꼭 export 해야한다 nextjs 프레임워크에서 이 함수를 찾아야만 부르기 때문.
 * default export 되는 component 와 동일하게 id param 을 prop 으로 전달받는다.
 */
export const generateMetadata = async ({ params: { id } }: IParams) => {
  /**
   * 여기서 한 번 호출된 getMovie 호출의 결과는 캐싱되고
   * MovieInfo 컴포넌트 안에서 호출되었을 때는 캐싱된 값을 사용하게 된다.
   */
  const movie = await getMovie(id)
  return {
    title: movie.title
  }
}

export default async function MovieDetailPage({params:{id}}:IParams) {
  return <div>
    <Suspense fallback={<h1>Loading Movie Info</h1>}>
      <MovieInfo id={id} />
    </Suspense>
    <Suspense fallback={<h1>Loading Movie Videos</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  </div>      
}