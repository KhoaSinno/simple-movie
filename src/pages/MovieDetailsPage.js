import React from 'react';
import { useParams } from 'react-router-dom'
import { fetcher } from '../config';
import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../components/movie/MovieCard';
import { useNavigate } from "react-router-dom";



const MovieDetailsPage = () => {
    const { movieId } = useParams()
    const { data, error, isLoading } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        fetcher
    );

    console.log("🚀 ~ file: MovieDetailsPage.js:13 ~ MovieDetailsPage ~ data:", data)
    if (!data) return null
    const { poster_path, title, genres, overview } = data

    return (
        <div className='pb-20'>
            <div className="relative w-full h-[600px] rounded-md">
                <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                <div className=' h-full w-full bg-cover bg-no-repeat bg-center ' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${poster_path}')` }}></div>
            </div>
            <div className='max-w-[900px] h-[400px] m-auto  -mt-[20%] relative z-10 mb-10'>
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt=""
                    className='h-full w-full object-cover rounded-xl'
                />
            </div>
            <div className="max-w-[900px] m-auto">
                <h1 className='text-5xl text-center font-bold mb-10'>{title}</h1>
                <div className="flex justify-center items-center gap-x-6 mb-10">
                    {genres.length > 0 && genres.map((genre) => <span key={genre.id} className='border border-primary text-primary py-2 px-4 rounded-lg'>{genre.name}</span>)}
                </div>
                <p className='text-lg text-center leading-relaxed mb-10'>{overview}</p>
                <CartList movieId={movieId}></CartList>
                <Trailer movieId={movieId}></Trailer>
            </div>
            <div className="max-w-[1100px] m-auto">
                <SimilarList movieId={movieId}></SimilarList>
            </div>

        </div>
    );
};

const CartList = ({ movieId }) => {
    const { data, error, isLoading } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/credits`,
        fetcher
    );

    const castes = data?.cast
    if (!castes && castes?.length < 0) return null
    return (
        <div className='mb-10'>
            <h1 className='text-5xl text-center font-bold mb-10'>Cast</h1>
            <div className='grid grid-cols-4 gap-10'>
                {castes && castes.slice(0, 4).map((cast) =>
                    <div key={castes.id} className='h-[300px] w-[200px] relative overflow-hidden group cursor-pointer'>
                        <img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt="cast" className='rounded-md object-cover' />
                        <span className='absolute bottom-0 py-2 text-xl bg-slate-600 bg-opacity-60 w-full text-center translate-y-[100%] transition-transform group-hover:translate-y-[0]'>{cast.name}</span>
                    </div>)}
            </div>
        </div>)
}

const Trailer = ({ movieId }) => {
    const { data, error, isLoading } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        fetcher
    );

    const video = (data && data.results) && (data.results[0] || data.results[1])
    if (!video) return null
    return (
        <div className='flex justify-center mb-10'>
            <iframe width="853" height="480" src={`https://www.youtube.com/embed/${video.key}`} title="&#39;Trolls Band Together&#39; with filmmakers | Academy Conversations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}
const SimilarList = ({ movieId }) => {
    const { data, error, isLoading } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/similar`,
        fetcher
    );
    const similarVideo = (data && data.results) || null
    const navigate = useNavigate();

    console.log("🚀 ~ file: MovieDetailsPage.js:89 ~ SimilarList ~ similarVideo:", similarVideo)
    return (
        <div className='similar '>
            <Swiper
                grabCursor={'true'}
                spaceBetween={25}
                slidesPerView={'auto'}
            >
                {similarVideo?.length > 0 && similarVideo.map((movie) => (
                    <SwiperSlide key={movie.id}><MovieCard movie={movie}></MovieCard></SwiperSlide>
                ))}
            </Swiper>
            <div className='w-full mt-10 flex justify-center items-center'>
                <button className='py-3 px-6 rounded-lg capitalize bg-red-800 w-[300px] font-medium  hover:bg-red-600 transition-all'
                    onClick={() => navigate(`/movie`)}
                >Search more!</button>
            </div>
        </div>
    )
}
export default MovieDetailsPage;