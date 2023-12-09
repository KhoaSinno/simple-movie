import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { fetcher } from '../../config.js'


const MovieList = ({ type = 'now_playing' }) => {
    const [movies, setMovies] = useState([])

    const { data, error, isLoading } = useSWR(
        `https://api.themoviedb.org/3/movie/${type}`,
        fetcher
    );
    useEffect(() => {
        data && data.results && setMovies(data.results)
    }, [data])
    console.log(movies)
    return (
        <div className="movies">
            <Swiper
                grabCursor={'true'}
                spaceBetween={25}
                slidesPerView={'auto'}
            >
                {movies.length > 0 && movies.map((movie) => (
                    <SwiperSlide key={movie.id}><MovieCard movie={movie}></MovieCard></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieList;