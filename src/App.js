import './App.scss';
import 'swiper/css';
import { Routes, Route } from 'react-router-dom'
import Main from './components/layout/Main';
// import HomePage from './pages/HomePage';
// import MoviePage from './pages/MoviePage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
// import MoviePageInfiniteLoading from 'pages/MoviePageInfiniteLoading';
import React, { Suspense, lazy } from 'react';


const HomePage = lazy(() => import('./pages/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const MoviePageInfiniteLoading = lazy(() => import('./pages/MoviePageInfiniteLoading'));


function App() {

  return (
    <>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path='/' element={<Main></Main>}>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/movie' element={<MoviePageInfiniteLoading></MoviePageInfiniteLoading>}></Route>
            <Route path='/movie/:movieId' element={<MovieDetailsPage></MovieDetailsPage>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
