import { SAMPLE_API_URL_PREFIX } from "../constants"

const getVideos = async (id: string) => {
  const url = `${SAMPLE_API_URL_PREFIX}/${id}/videos`
  const response = await fetch(url)
return response.json()
}

export default async function MovieVideos({id}:{id:string}) {
    
    const videos = await getVideos(id)
  return <>
    <h6>{JSON.stringify(videos)}</h6>
  </>
    
}