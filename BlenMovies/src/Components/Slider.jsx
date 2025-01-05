import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

function Slider() {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null)
    const screenWidth = window.innerWidth

    useEffect(() => {
        getTrendingMovies()
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            setMovieList(resp.data.results)
            console.log(resp.data.results)
        })
    }

    const sliderRight = (element) => {
        if (element) {
            element.scrollLeft += screenWidth-300
        }
    }

    const sliderLeft = (element) => {
        if (element) {
            element.scrollLeft -= screenWidth-300
        }
    }

    return (
        <div className="relative mt-[60px]">
            <HiChevronLeft className='hidden md:block text-white mx-10 mt-[170px] text-[40px] absolute cursor-pointer' onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white mx-10 mt-[170px] text-[40px] cursor-pointer absolute right-0' onClick={() => sliderRight(elementRef.current)} />

            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieList.map((item, index) => (
                    <img key={index} className="min-w-full md:min-w-[900px] h-auto md:h-[410px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] transition-all duration-100 ease-in-out border-gray-400" src={IMAGE_BASE_URL + item.backdrop_path} alt={item.title} />
                ))}
            </div>
        </div>
    )
}

export default Slider