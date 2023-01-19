import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/Api';
import { Outlet } from 'react-router-dom';
import { actorImgUrl } from 'services/Api';
import {
  LinkBtn,
  ListItem,
  GenresItem,
  MovieTitle,
  CardWrapper,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state.from ?? '/';

  useEffect(() => {
    async function Fetch() {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovieData(movieData);
      } catch (error) {
        console.log(error);
      }
    }
    if (movieId) {
      Fetch();
    }
  }, [movieId]);

  if (!movieData) {
    return null;
  }
  const { poster_path, original_title, vote_average, overview, genres } =
    movieData;

  return (
    <main>
      <div>
        <CardWrapper>
          {movieData && (
            <img
              src={actorImgUrl(poster_path)}
              width="300"
              alt={original_title}
            />
          )}
          <div
            className="movie__info"
            style={{ background: 'white', maxWidth: '1600px' }}
          >
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
      </div>
      <div
        className="movie__additianal"
        style={{ padding: '0 40px', maxWidth: '1600px' }}
      >
        {/* <h3>Additional information:</h3> */}
        <ul style={{ display: 'flex', marginBottom: '20px' }}>
          <ListItem>
            <LinkBtn to={backLinkHref}>Go Back</LinkBtn>
          </ListItem>
          <ListItem>
            <LinkBtn to={'cast'} state={{ from: backLinkHref }}>
              Cast
            </LinkBtn>
          </ListItem>
          <ListItem>
            <LinkBtn to={'reviews'} state={{ from: backLinkHref }}>
              Reviews
            </LinkBtn>
          </ListItem>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};
export default MovieDetails;
