import React from 'react'
import { Link } from 'react-router-dom'
import UseSearchEachCourse from '../hooks/UseSearchEachCourse'

export default function SearchCards({ Title, series, year}) {
  const {data, isLoading} = UseSearchEachCourse(Title, year)
  if(isLoading){
return (  <div className='h-[300px] shrink-0  group relative mx-2 my-2 flex items-center justify-center shadow-2xl shadow-black z-[10] overflow-hidden w-[200px] rounded-md cursor-pointer bg-gradient-to-r  from-zinc-800 to-zinc-950 animate-pulse'>
  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
      </svg>
  <div className='absolute top-0 z-20 w-full py-3 h-full flex items-center justify-end flex-col  bg-gradient-to-b    from-transparent to-zinc-950'>
      <p className='text-white rounded-md animate-pulse bg-zinc-900 h-[15px] font-semibold  w-[80%]  px-2'></p>
      <div className='flex flex-row w-full px-2 '>
          <p className='text-gray-600 rounded-md animate-pulse bg-zinc-900 w-[100px] h-[15px]  mt-2'></p>
        
      </div>

  </div>

</div>)
  }
  else{
  return (
    <Link to={data?.data?.results[0]?.media_type==='tv'?`/series/${data?.data?.results[0]?.id}`:`/movie/${data?.data?.results[0]?.id}`} className='h-[300px] shrink-0  group relative mx-2 my-2 shadow-2xl shadow-black z-[10] overflow-hidden w-[200px] rounded-md cursor-pointer bg-gradient-to-r  from-zinc-800 to-zinc-950'>
    <img src={`https://image.tmdb.org/t/p/w500/${data?.data?.results[0]?.poster_path}`} alt="" className='w-full h-full object-cover' />
    <div className='absolute top-0 z-20 w-full py-3 h-full flex items-center justify-end flex-col  bg-gradient-to-b group-hover:from-black group-hover:to-slate-900 group-hover:opacity-80 from-transparent to-zinc-950'>
        <p className='text-white font-semibold  w-full  px-2'>{data?.data?.results[0]?.title||data?.data?.results[0]?.name}</p>
        <div className='flex flex-row w-full px-2 '>
            <p className='text-gray-600 '>{year}</p>
            <p className='text-gray-600  mx-2'>{data?.data?.results[0]?.media_type==='tv'?"Series":"movie"}</p>
        </div>

    </div>

  </Link>
  )
}
}
