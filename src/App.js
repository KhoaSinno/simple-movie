import './App.scss';
import MovieCard from './components/movie/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieList from './components/movie/MovieList';
import Banner from './components/banner/Banner';


function App() {
  return (
    <>
      {/* navigation */}
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 font-medium mb-5">
        <span className='text-primary'>Home</span>
        <span className=''>Movies</span>
      </header>
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
}

export default App;
