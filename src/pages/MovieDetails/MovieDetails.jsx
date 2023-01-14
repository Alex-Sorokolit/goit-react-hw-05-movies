import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/Api';
import { Outlet } from 'react-router-dom';
import { StyledLink } from 'components/Link.styled';

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
      <div style={{ display: 'flex', padding: '20px' }}>
        {movieData && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width="200"
            alt={original_title}
          ></img>
        )}
        <div className="movie__info" style={{ padding: '20px' }}>
          <h2>{original_title}</h2>
          <p>Raiting: {vote_average.toFixed(1)}</p>
          <h3>Overview:</h3>
          <p>{overview}</p>
          <h3>Genres:</h3>
          <ul>
            {genres.map(genre => (
              <li
                key={genre.id}
                style={{
                  display: 'inline',
                  marginLeft: '15px',
                  color: 'orangered',
                }}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="movie__additianal">
        <h3>Additional information:</h3>
        <ul>
          <li>
            <StyledLink to={'cast'}>Cast</StyledLink>
          </li>
          <li>
            <StyledLink to={'reviews'}>Reviews</StyledLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

// Кнопка back to list
