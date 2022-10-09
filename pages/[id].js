import DetailsPage from '../components/Pages/DetailsPage'
import { API } from '../store/store'

export default function Product({ data }) {
  console.log('id page', data.poster_path)

  return <DetailsPage data={data} />
}

export async function getServerSideProps({ params }) {
  const URL = API + '/movie?movieId=' + params.id

  const res = await fetch(URL)
  const resultData = await res.json()
  const data = resultData.data

  // const data = await result.json()
  return { props: { data } }
}
