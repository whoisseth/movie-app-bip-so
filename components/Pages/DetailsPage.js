import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/dist/client/link'
import { BiCategory } from 'react-icons/bi'
import Image from 'next/image'
import { PreImageURL } from '../../store/store'

export default function DetailsPage({ data }) {
  console.log('details page image', PreImageURL + data.poster_path)
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4 sm:mb-10  ">
      <BackButton />
      <div className="px-4 sm:px-6 sm:flex  gap-4 md:gap-12 sm:mt-8 sm:mx-auto max-w-6xl  items-center  justify-center  ">
        <BannerImage
          // image={ PreImageURL + data.poster_path }
          image={PreImageURL + data.poster_path}
        />
        <ProductDesc
          title={data.title}
          rating={data.vote_average}
          overview={data.overview}
        />
      </div>
    </div>
  )
}

function BackButton() {
  return (
    <Link href="/">
      <a className=" ml-5 my-8 flex rounded-full px-3 bg-gray-300 h-10 w-10  items-center justify-center transition-all  hover:shadow-md ">
        <IoIosArrowBack className="text-3xl -ml-2 " />
      </a>
    </Link>
  )
}

function BannerImage({ className, image }) {
  return (
    <div className={className}>
      <div className="relative h-[366px] w-[275px]    overflow-hidden  mx-auto sm:mx-0">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

function ProductDesc({ title, rating, overview }) {
  return (
    <div className="mx-auto sm:mx-0 max-w-sm sm:ml-4 flex flex-col  ">
      <h2 className="text-2xl font-semibold mt-2">{title}</h2>
      <div className="mb-4 flex justify-between items-center">
        <p className="uppercase font-bold   flex items-center gap-1">
          {/* <BiCategory /> */}
          {/* <span> {data.category}</span> */}
        </p>
      </div>
      <section className="flex justify-between items-center mt-4">
        <span className="text-sm text-[#007185]">{rating} ratings</span>
      </section>
      <p> {overview}</p>
    </div>
  )
}
