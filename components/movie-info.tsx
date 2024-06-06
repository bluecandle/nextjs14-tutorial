import { SAMPLE_API_URL_PREFIX } from "../constants"

const getMovie = async (id: string) => {
  const url = `${SAMPLE_API_URL_PREFIX}/${id}`
  console.log(`url ${url}`)
  const response = await fetch(url)
  return response.json()
}


export default async function MovieInfo({id}:{id:string}) {
    
    const movie = await getMovie(id)
  return <>
    <h6>{JSON.stringify(movie)}</h6>
  </>
    
}