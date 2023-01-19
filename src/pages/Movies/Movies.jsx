import { SearchBox } from 'components/SearchBox';
import { useState, useEffect } from 'react';
import { getSearchMovie } from 'services/Api';
import { StyledLink } from 'components/Link.styled';
import { CardSet, CardItem } from 'components/CardSet.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Button from 'components/PageBtn';
import { Main, ImageWrapper, Cover } from './Movies.styled';
import { posterMovieUrl } from 'services/Api';
import { useSessionStorage } from 'hooks/useSessionStorage';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useSessionStorage('page');
  const [searchParams] = useSearchParams('');
  const location = useLocation();

  useEffect(() => {
    console.log('mount');
    const queryParams = searchParams.get('query') ?? ''; // отримує запит із url
    if (!queryParams) {
      return;
    }

    async function Fetch() {
      try {
        const movieData = await getSearchMovie(queryParams, page);
        const { results, total, totalPages } = movieData;

        // Перевірка чи є результати пошуку
        if (results === 0) {
          toast.error('За вашим запитом немає результатів');
          return;
        }

        // запис даних у стейт
        setMovies(results);
        setTotalPages(totalPages);

        // Показуємо кількість результатів при першому запиті
        if (page === 1) {
          toast.success(`Знайдено ${total} фільмів`);
        }
      } catch (error) {
        console.log(error);
      }
    }
    Fetch();
    return console.log('unmount');
  }, [page, searchParams]);

  function onSubmit() {
    setMovies([]);
    setPage(1);
  }
  // Кнопки пагінації
  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setPage(prevPage => prevPage - 1);
  };

  if (!movies) {
    return null;
  }
  return (
    <Main>
      <SearchBox onSubmit={onSubmit} />
      <CardSet>
        {movies.map(movie => (
          <CardItem key={movie.id}>
            <StyledLink to={`${movie.id}`} state={{ from: location }}>
              {/* <p>{movie.original_title}</p> */}
              <ImageWrapper>
                <Cover
                  src={posterMovieUrl(movie.poster_path)}
                  width="200"
                  alt={movie.original_title}
                />
              </ImageWrapper>
            </StyledLink>
          </CardItem>
        ))}
      </CardSet>

      <div style={{ display: 'flex' }}>
        {movies.length !== 0 && page >= 2 && (
          <Button type="button" setPage={prevPage}>
            Previous Page
          </Button>
        )}
        {page < totalPages && (
          <Button type="button" setPage={nextPage}>
            Next Page
          </Button>
        )}
      </div>
    </Main>
  );
};

export default Movies;
