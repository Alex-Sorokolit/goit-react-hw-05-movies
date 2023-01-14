import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Movies from '../../pages/Movies/Movies';
import NavItem from './App.styled';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <div>
      <nav style={{ background: '#0D1117', padding: '5px' }}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Toaster />
    </div>
  );
};
