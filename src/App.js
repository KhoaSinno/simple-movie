import './App.scss';
import 'swiper/css';
import { Routes, Route, useParams } from 'react-router-dom'
import Main from './components/layout/Main';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main></Main>}>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/movie' element={<MoviePage></MoviePage>}></Route>
          <Route path='/movie/:movieId' element={<MovieDetailsPage></MovieDetailsPage>}></Route>
        </Route>
      </Routes>

    </>
  );
}

export default App;
