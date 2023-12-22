import './App.scss';
import 'swiper/css';
import { Routes, Route } from 'react-router-dom'
import Main from './components/layout/Main';
// import HomePage from './pages/HomePage';
// import MoviePage from './pages/MoviePage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
import React, { Suspense, lazy } from 'react';
import HashLoader from "react-spinners/HashLoader";


const HomePage = lazy(() => import('./pages/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));


function App() {

  return (
    <>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path='/' element={<Main></Main>}>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/movie' element={<MoviePage></MoviePage>}></Route>
            <Route path='/movie/:movieId' element={<MovieDetailsPage></MovieDetailsPage>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
