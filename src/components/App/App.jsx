import { lazy, Suspense } from 'react';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
// import Movies from '../../pages/Movies/Movies';
import { NavList, NavItem } from './App.styled';
import { Toaster } from 'react-hot-toast';

const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);

export const App = () => {
  return (
    <div>
      <NavList>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </NavList>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Loading page...</div>}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<div>Loading page...</div>}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Toaster />
    </div>
  );
};
