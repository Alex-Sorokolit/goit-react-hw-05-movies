import { useState, useEffect } from 'react';
import { getTrending } from '../../services/Api';
import { StyledLink } from '../../components/Link.styled';
import { Galery } from 'components/Galery.styled';
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

        // // Забираємо тільки ті дані які потрібні
        // const trendings = imagesData.hits.map(
        //   ({ id, tags, webformatURL, largeImageURL }) => ({
        //     id,
        //     tags,
        //     webformatURL,
        //     largeImageURL,
        //   })
        // );

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
    <div>
      <h2>Trending today</h2>
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
    </div>
  );
};

export default Home;

// Додати пагінацію
