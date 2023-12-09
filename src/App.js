import './App.scss';
import MovieCard from './components/movie/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieList from './components/movie/MovieList';
import Banner from './components/banner/Banner';
import { Routes, Route } from 'react-router-dom'
import Main from './components/layout/Main';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main></Main>}>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/movie' element={<MoviePage></MoviePage>}></Route>
        </Route>
      </Routes>

    </>
  );
}

export default App;
