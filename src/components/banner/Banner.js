import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../button/Button';
import { useNavigate } from "react-router-dom";
import UseFetchMovie from '../../hooks/UseFetchMovie';


const Banner = () => {
    // const { data, error, isLoading } = useSWR(
    //     `https://api.themoviedb.org/3/movie/upcoming`,
    //     fetcher
    // );
    const { dataMovie, error, isLoading } = UseFetchMovie(`movie/upcoming`)
    const banners = dataMovie?.results || []
    return (
        <section className='banner h-[500px] page-container'>
            <Swiper
                grabCursor={'true'}
                spaceBetween={25}
                slidesPerView={'auto'}
            >
                {banners?.length > 0 && banners.map((banner) => (
                    <SwiperSlide key={banner.id}><BannerItem banner={banner}></BannerItem></SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

const BannerItem = ({ banner }) => {
    const { title, poster_path, id } = banner
    const navigate = useNavigate();

    return (
        <div className="w-full h-full rounded-lg relative">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
            <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt=""
                className='h-full w-full object-cover rounded-lg'
            />
            <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className='font-bold text-4xl mb-8'>{title}</h2>
                <div className="flex items-center gap-x-3 mb-7">
                    <span className='py-2 px-4 border border-white rounded-md'>Advengers</span>
                    <span className='py-2 px-4 border border-white rounded-md'>Advengers</span>
                    <span className='py-2 px-4 border border-white rounded-md'>Advengers</span>
                </div>
                <Button
                    onClickId={() => navigate(`/movie/${id}`)}
                    bgColor='primary'
                >Watch Now!</Button>
            </div>
        </div>
    );
};


export default Banner;