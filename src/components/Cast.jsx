import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/Api';
import { Galery } from './Galery.styled';
import { ActorImageWrapper } from './Cast.styled';

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
            <ActorImageWrapper>
              <img
                src={
                  cast.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : 'https://cdn.pixabay.com/photo/2014/04/03/11/50/drama-312318_960_720.png'
                }
                alt={cast.character}
                width={200}
              ></img>
            </ActorImageWrapper>
            <p>
              <b>Character:</b> {cast.character}
            </p>
            <p>
              <b>Name:</b> {cast.original_name}
            </p>
          </li>
        ))}
      </Galery>
    </div>
  );
};

// додати заглушку на актора
