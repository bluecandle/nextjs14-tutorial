export const metadata = {
  title: 'Movie Detail',
}

export default function MovieDetailPage({params:{id}}:{params:{id:string}}) {
    // console.log(props)
    return <>
        <h1>Movie {id}</h1>
    </>
    
}