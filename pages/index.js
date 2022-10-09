import Homepage from './../components/Pages/Homepage'
import { API } from '../store/store'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Home() {
  const [data, setData] = useState([])
  const [searchField, setSearchField] = useState('')

  const getData = async (searchValue) => {
    const URL =
      searchField.length > 1
        ? API + `/search?page=1&query=${searchValue}`
        : API + '/popular?page=1)'
    const res = await fetch(URL)
    const data = await res.json()
    const result = data.data.results
    if (result) setData(result)
  }
  useEffect(() => {
    getData(searchField)
  }, [searchField])

  return <Homepage data={data} setSearchField={setSearchField} />
}
