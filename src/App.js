import './App.scss';
import MovieCard from './components/movie/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieList from './components/movie/MovieList';

// now playing
//https://api.themoviedb.org/3/movie/now_playing


function App() {
  return (
    <>
      {/* navigation */}
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 font-medium mb-5">
        <span className='text-primary'>Home</span>
        <span className=''>Movies</span>
      </header>
      {/* banner */}
      <section className='banner h-[500px] page-container'>
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img src="https://storage.googleapis.com/leep_app_website/2021/06/End-Game-01.jpg" alt=""
            className='h-full w-full object-cover rounded-lg'
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className='font-bold text-4xl mb-8'>Advengers: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-7">
              <span className='py-2 px-4 border border-white rounded-md'>Advengers</span>
              <span className='py-2 px-4 border border-white rounded-md'>Advengers</span>
              <span className='py-2 px-4 border border-white rounded-md'>Advengers</span>
            </div>
            <button className='font-medium px-6 py-3 bg-primary rounded-lg'>Watch Now!</button>
          </div>
        </div>
      </section>
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
