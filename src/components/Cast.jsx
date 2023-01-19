import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/Api';
import { CardSet, CardItem } from './CardSet.styled';
import { actorImgUrl } from 'services/Api';

export const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  useEffect(() => {
    async function Fetch(query) {
      try {
        const castData = await getCast(query);
        setCastData(castData);
      } catch (error) {
        console.log(error);
      }
    }
    if (movieId) {
      Fetch(movieId);
    }
  }, [movieId]);

  if (!castData) {
    return null;
  }

  return (
    <div>
      <CardSet>
        {castData.map(cast => (
          <CardItem key={cast.id}>
            <div>
              <img
                src={actorImgUrl(cast.profile_path)}
                alt={cast.character}
                width={200}
              />
            </div>
            <div>
              <p>
                <b>Character:</b> {cast.character}
              </p>
              <p>
                <b>Name:</b> {cast.original_name}
              </p>
            </div>
          </CardItem>
        ))}
      </CardSet>
    </div>
  );
};

// запит за актором (показати всі фільми в яких знімався)
