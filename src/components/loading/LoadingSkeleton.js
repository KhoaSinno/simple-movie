import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function LoadingSkeleton(props) {
    return (
        <div className={`skeleton ${props.className}`} style={{
            height: props.height,
            width: props.width || '100%',
            borderRadius: props.radius || '10px'
        }}></div>
    )
}
export const CardSkeleton = () =>
    <div className="movie-card flex flex-col p-3 rounded-lg bg-slate-800 h-full select-none">
        <LoadingSkeleton className={`w-full h-[250px] object-cover rounded-lg mb-5`}></LoadingSkeleton>
        <div className="flex flex-col flex-1">
            <LoadingSkeleton className={`mb-3`} height={`10px`}></LoadingSkeleton>
            <div className="flex justify-between items-center gap-x-10 mb-8">
                <LoadingSkeleton height={`20px`} width={`80px`}></LoadingSkeleton>
                <LoadingSkeleton height={`20px`} width={`80px`}></LoadingSkeleton>
            </div>
            <LoadingSkeleton className={`py-5 px-6 rounded-lg mt-auto`}></LoadingSkeleton>
        </div>
    </div>

export const MovieListSkeleton = () =>
    <div className="movies">
        <Swiper
            grabCursor={'true'}
            spaceBetween={25}
            slidesPerView={'auto'}
        >
            <SwiperSlide ><CardSkeleton ></CardSkeleton></SwiperSlide>
            <SwiperSlide ><CardSkeleton ></CardSkeleton></SwiperSlide>
            <SwiperSlide ><CardSkeleton ></CardSkeleton></SwiperSlide>
            <SwiperSlide ><CardSkeleton ></CardSkeleton></SwiperSlide>
            <SwiperSlide ><CardSkeleton ></CardSkeleton></SwiperSlide>
        </Swiper>
    </div>

export const BannerSkeleton = () =>
    <section className='banner h-[500px] page-container'>
        <Swiper
            grabCursor={'true'}
            spaceBetween={25}
            slidesPerView={'auto'}
        >
            <SwiperSlide >
                <div className="w-full h-full rounded-lg relative select-none">
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
                    <LoadingSkeleton className={`h-full w-full object-cover rounded-lg`}></LoadingSkeleton>
                    <div className="absolute left-5 bottom-5 w-full text-white">
                        <LoadingSkeleton className={`mb-8`} height={`50px`} width={`400px`}></LoadingSkeleton>
                        <div className="flex items-center gap-x-3 mb-7">
                            <LoadingSkeleton className={`py-2 px-4 rounded-md`} height={`30px`} width={`100px`}></LoadingSkeleton>
                            <LoadingSkeleton className={`py-2 px-4 rounded-md`} height={`30px`} width={`100px`}></LoadingSkeleton>
                            <LoadingSkeleton className={`py-2 px-4 rounded-md`} height={`30px`} width={`100px`}></LoadingSkeleton>
                        </div>
                        <LoadingSkeleton className={`py-5 px-6 rounded-lg mt-auto w-[20%]`}></LoadingSkeleton>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>