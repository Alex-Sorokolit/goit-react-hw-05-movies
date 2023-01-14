import { useState, useEffect } from 'react';
import { getTrending } from '../../services/Api';
import { StyledLink } from '../../components/Link.styled';
import { Galery } from 'components/Galery.styled';
import { Main } from './Home.styled';
import { Title } from './Home.styled';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function Fetch() {
      setIsLoading(true);
      setError(null);
      try {
        // Запит на бекенд
        const trendings = await getTrending();

        // Перевірка чи є результати пошуку
        if (trendings.length === 0) {
          setMessage('Щось пішло не так, спробуйте перезавантажити сторінку');
          return;
        }

        // Записуємо дані у стейт
        setTrends(trendings);
        // setTotal(totalHits);
      } catch (error) {
        setError('Щось пішло не так, перезавантажте сторінку');
      } finally {
        setIsLoading(false);
      }
    }
    Fetch();
  }, []);

  if (!trends) {
    return null;
  }

  return (
    <Main>
      {/* <Title>Trending today</Title> */}
      <Galery>
        {trends.map(trend => (
          <li key={trend.id}>
            <StyledLink to={`movies/${trend.id}`}>
              {/* <p>{trend.original_title}</p> */}
              <img
                src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`}
                width="200"
                alt={trend.original_title}
              ></img>
            </StyledLink>
          </li>
        ))}
      </Galery>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {message && <p>{message}</p>}
    </Main>
  );
};

export default Home;

// Додати пагінацію
