import { SearchBox } from 'components/SearchBox';
import { useState, useEffect } from 'react';
import { getSearchMovie } from 'services/Api';
import { StyledLink } from 'components/Link.styled';
import { Galery } from 'components/Galery.styled';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Button from 'components/LoadMoreBtn';
import { Main, GaleryItem, Cover } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(''); // на запит передаємо query а не queryParams щоб запит відбувався тільки при submit
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams(); // записує searchQuery в url
  const queryParams = searchParams.get('query') ?? ''; // отримує запит із url
  const [total, setTotal] = useState(0);

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
          // console.log(`Знайдено ${total_results} фільмів`);
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
    console.log(queryParams);

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
    console.log(page);
  };

  return (
    <Main>
      <SearchBox
        onSubmit={onSubmit}
        value={queryParams}
        onChange={handleInputChange}
      />
      <Galery>
        {movies.length > 0 &&
          movies.map(movie => (
            <GaleryItem key={movie.id}>
              <StyledLink to={`${movie.id}`}>
                {/* <p>{movie.original_title}</p> */}
                <Cover
                  src={
                    movie.poster_path !== null
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : 'https://cdn.pixabay.com/photo/2013/07/12/12/01/film-145099_960_720.png'
                  }
                  width="200"
                  alt={movie.original_title}
                ></Cover>
              </StyledLink>
            </GaleryItem>
          ))}
      </Galery>
      {movies.length > 0 && total > movies.length && (
        <Button type="button" loadMore={loadMore} />
      )}
    </Main>
  );
};

export default Movies;

// додати кнопку loadMore
// Вивести повідомлення при пустому запиті
// Повідомлення якщо немає результатів
// Зробити заглушку для зображення
// При поверненні повинен бути список фільмів
