import { SearchBox } from 'components/SearchBox';
import { useState, useEffect } from 'react';
import { getSearchMovie } from 'services/Api';
import { StyledLink } from 'components/Link.styled';
import { CardSet, CardItem } from 'components/CardSet.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Button from 'components/LoadMoreBtn';
import { save, load } from 'components/localStorageMethods';
import { Main, ImageWrapper, Cover } from './Movies.styled';
import { posterMovieUrl } from 'services/Api';

const Movies = () => {
  const LocalData = load('movies');
  const [movies, setMovies] = useState(LocalData ? LocalData : []);
  const [query, setQuery] = useState(''); // на запит передаємо query а не queryParams щоб запит відбувався тільки при submit
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams(); // записує searchQuery в url
  const queryParams = searchParams.get('query') ?? ''; // отримує запит із url
  const [total, setTotal] = useState(0);
  const location = useLocation();

  // якщо query змінилось, робимо запит
  useEffect(() => {
    async function Fetch(query, page) {
      try {
        const movieData = await getSearchMovie(query, page);
        const { results, total_results } = movieData;
        // Перевірка чи є результати пошуку
        if (results === 0) {
          toast.error('За вашим запитом немає результатів');
          return;
        }

        // запис даних у стейт
        setMovies(prevMovies => [...prevMovies, ...results]);

        // console.log(movies);

        setTotal(total_results);

        // Показуємо кількість результатів при першому запиті
        if (page === 1) {
          toast.success(`Знайдено ${total_results} фільмів`);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (query !== '') {
      Fetch(query, page);
    }
  }, [query, page]);

  // отримує дані з інпута і записує в url
  const handleInputChange = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  // при sabmit оновлює query
  const onSubmit = event => {
    event.preventDefault();
    // console.log(queryParams);

    if (queryParams === '') {
      toast.error('Напишіть назву фільму в поле пошуку');
      return;
    }

    if (queryParams === query) {
      toast.error(`Проявляйте креатив, пришіть різні запити`);
      return;
    }

    setQuery(queryParams);
    setMovies([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    // console.log(page);
  };
  if (movies !== []) {
    save('movies', movies);
  }

  if (!movies) {
    return null;
  }
  return (
    <Main>
      <SearchBox
        onSubmit={onSubmit}
        value={queryParams}
        onChange={handleInputChange}
      />

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
                ></Cover>
              </ImageWrapper>
            </StyledLink>
          </CardItem>
        ))}
      </CardSet>

      {movies.length > 0 && total > movies.length && (
        <Button type="button" loadMore={loadMore} />
      )}
    </Main>
  );
};

export default Movies;

// При поверненні повинен бути список фільмів
