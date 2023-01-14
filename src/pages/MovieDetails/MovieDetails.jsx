import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/Api';
import { Outlet } from 'react-router-dom';
import {
  LinkBtn,
  ListItem,
  GenresItem,
  MovieTitle,
  CardWrapper,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    async function Fetch(query) {
      try {
        const movieData = await getMovieDetails(query);
        setMovieData(movieData);
      } catch (error) {
        console.log(error);
      }
    }
    if (movieId) {
      Fetch(movieId);
    }
  }, [movieId]);

  if (!movieData) {
    return null;
  }
  const { poster_path, original_title, vote_average, overview, genres } =
    movieData;
  // console.log(movieData);
  return (
    <main>
      <CardWrapper>
        {movieData && (
          <img
            src={
              poster_path !== null
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://cdn.pixabay.com/photo/2013/07/12/12/01/film-145099_960_720.png'
            }
            width="300"
            alt={original_title}
          ></img>
        )}
        <div className="movie__info" style={{ background: 'white' }}>
          <MovieTitle>{original_title}</MovieTitle>
          <div style={{ padding: '0 20px' }}>
            <p>Raiting: {vote_average.toFixed(1)}</p>
            <h3>Overview:</h3>
            <p>{overview}</p>
            <h3>Genres:</h3>
            <ul style={{ display: 'flex' }}>
              {genres.map(genre => (
                <GenresItem key={genre.id}>{genre.name}</GenresItem>
              ))}
            </ul>
          </div>
        </div>
      </CardWrapper>
      <div className="movie__additianal" style={{ padding: '0 40px' }}>
        <h3>Additional information:</h3>
        <ul style={{ display: 'flex', marginBottom: '20px' }}>
          <ListItem>
            <LinkBtn to={'cast'}>Cast</LinkBtn>
          </ListItem>
          <ListItem>
            <LinkBtn to={'reviews'}>Reviews</LinkBtn>
          </ListItem>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

// Кнопка back to list
