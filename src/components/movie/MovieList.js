import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';
import UseFetchMovie from 'hooks/UseFetchMovie.js';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary'
import { MovieListSkeleton } from 'components/loading/LoadingSkeleton'

const MovieList = ({ type = 'now_playing' }) => {
    // const { data, error, isLoading } = useSWR(
    //     `https://api.themoviedb.org/3/movie/${type}`,
    //     fetcher
    // );
    const { dataMovie, error, isLoading } = UseFetchMovie(`movie/${type}`)
    const movies = dataMovie?.results

    return (
        <div className="movies">
            <Swiper
                grabCursor={'true'}
                spaceBetween={25}
                slidesPerView={'auto'}
            >
                {movies?.length > 0 && movies.map((movie) => (
                    <SwiperSlide key={movie.id}><MovieCard movie={movie}></MovieCard></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

// export default MovieList;

const MovieListWithErrorBoundary = withErrorBoundary(MovieList, {
    fallback: <MovieListSkeleton></MovieListSkeleton>,
    onError(error, info) {
        console.log(error)
    },
})

export default MovieListWithErrorBoundary

MovieList.propTypes = {
    type: PropTypes.string,
}