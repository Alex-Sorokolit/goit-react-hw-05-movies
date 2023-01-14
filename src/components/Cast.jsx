import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/Api';
import { Galery } from './Galery.styled';

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
  // const { profile_path, character, original_name } = castData;
  // console.log(castData);
  return (
    <div>
      <Galery>
        {castData.map(cast => (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
              alt={cast.character}
              width={200}
            ></img>
            <p>Character: {cast.character}</p>
            <p>Name: {cast.original_name}</p>
          </li>
        ))}
      </Galery>
    </div>
  );
};

// додати заглушку на актора
