import { PreImageURL } from '../../store/store'
import Card from './../Card'
import { SearchBox } from './../SearchBox'
//
export default function Homepage({ data, setSearchField }) {
  return (
    <Container>
      <h1 className=" lg:px-8 w-full font-semibold text-5xl">Movie App</h1>

      <SearchBox
        search={(e) => setSearchField(e.target.value)}
        placeholder="Search for movies "
      />
      {data.length < 1
        ? 'Loading...'
        : data.map((data, index) => (
            <>
              <Card
                key={index}
                image={PreImageURL + data.poster_path}
                name={data.title}
                slug={data.id}
              />
            </>
          ))}
    </Container>
  )
}

function Container({ children }) {
  return (
    <div className=" mx-auto px-2 md:px-6 flex flex-wrap gap-1 sm:gap-6 items-center justify-center my-4">
      {children}
    </div>
  )
}
