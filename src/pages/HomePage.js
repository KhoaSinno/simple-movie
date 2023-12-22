import React from 'react';
import Banner from 'components/banner/Banner';
import MovieList from 'components/movie/MovieList';

const HomePage = () => {
    return (
        <>
            {/* banner */}
            <Banner></Banner>
            {/* movies layout */}
            <section className="movies-layout page-container pt-20 text-white">
                <h2 className='text-3xl font-bold mb-5'>Top rated movies</h2>
                <MovieList></MovieList>
            </section>
            <section className="movies-layout page-container pt-20 text-white">
                <h2 className='text-3xl font-bold mb-5'>Top trending</h2>
                <MovieList type='popular'></MovieList>

            </section>
            <section className="movies-layout page-container py-20 text-white">
                <h2 className='text-3xl font-bold mb-5'>Now playing</h2>
                <MovieList type='top_rated'></MovieList>

            </section>
        </>
    );
};

export default HomePage;