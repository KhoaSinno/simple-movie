import React, { useEffect, useState } from 'react';
import { fetcher } from '../config';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import UseDebounceSN from '../hooks/UseDebounceSN';
import HashLoader from "react-spinners/HashLoader";
import ReactPaginate from 'react-paginate';

const MoviePage = () => {
    const [searchText, setSearchText] = useState('');
    const [pageOfNumber, setPageOfNumber] = useState(1);
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?page=${pageOfNumber}`);
    const [pageCount, setPageCount] = useState(500);
    const { data, isLoading } = useSWR(
        url,
        fetcher
    );
    const movies = data?.results
    const debounceValue = UseDebounceSN(searchText, 700)
    const handleChangeSearch = (e) => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        if (debounceValue) {
            setUrl(`https://api.themoviedb.org/3/search/movie?query=${debounceValue}&page=${pageOfNumber}`)
            setPageCount(Math.ceil(+data?.total_results / 20))
        } else {
            setUrl(`https://api.themoviedb.org/3/movie/popular?page=${pageOfNumber}`)
            setPageCount(500)
        }
    }, [data?.total_results, debounceValue, pageOfNumber]);

    // but aip of movie DB will limit 500 page count
    // const pageCount = Math.ceil(+data?.total_results / 20);


    const handlePageClick = (event) => {
        setPageOfNumber(event.selected + 1)
        // const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        // setItemOffset(newOffset);
    };


    return (
        <div className='page-container mb-20'>
            <div className="flex mb-10 px-72">
                <div className="flex-1 ">
                    <input type="text" placeholder='Type here to search...'
                        className='w-full bg-slate-800 p-3 outline-none rounded-l-md text-white focus:bg-slate-700'
                        onChange={(e) => handleChangeSearch(e)}
                    />
                </div>
                <button className=' bg-primary text-white rounded-r-md w-[50px] flex items-center justify-center hover:bg-pink-800 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="30" viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" fill='#fff'></path>
                    </svg>
                </button>
            </div>
            {!isLoading ?
                <div className="grid grid-cols-4 gap-10 text-white">
                    {movies?.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
                </div>
                :
                <div className='flex justify-center items-center h-[35vh]'>

                    <HashLoader color="#ac36d6" />
                </div>
            }
            <div className='paginationSN mt-10 select-none'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};

export default MoviePage;