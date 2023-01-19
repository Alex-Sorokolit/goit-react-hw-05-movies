import { useState, useEffect } from 'react';
import { getTrending } from '../../services/Api';
import { StyledLink } from '../../components/Link.styled';
import { CardSet } from 'components/CardSet.styled';
import { Main } from './Home.styled';
import { posterMovieUrl } from '../../services/Api';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [trends, setTrends] = useState([]);
  const location = useLocation();

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
      <CardSet>
        {trends.map(trend => (
          <li key={trend.id}>
            <StyledLink to={`movies/${trend.id}`} state={{ from: location }}>
              {/* <p>{trend.original_title}</p> */}
              <img
                src={posterMovieUrl(trend.poster_path)}
                width="200"
                alt={trend.original_title}
              ></img>
            </StyledLink>
          </li>
        ))}
      </CardSet>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {message && <p>{message}</p>}
    </Main>
  );
};

export default Home;
