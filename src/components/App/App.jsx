import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Movies from '../Movies/Movies';
import NavItem from './App.styled';

export const App = () => {
  return (
    <div>
      <nav style={{ background: '#0D1117' }}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
};
