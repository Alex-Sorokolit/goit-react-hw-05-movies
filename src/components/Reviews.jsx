import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/Api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    async function Fetch(query) {
      try {
        const reviewsData = await getReviews(query);
        setReviewsData(reviewsData);
      } catch (error) {
        console.log(error);
      }
    }
    if (movieId) {
      Fetch(movieId);
    }
  }, [movieId]);
  if (!reviewsData) {
    return null;
  }
  return (
    <div>
      {reviewsData.length > 0 ? (
        <ul>
          {reviewsData.map(revie => (
            <li key={revie.id}>
              <h3>{revie.author}</h3>
              <p>{revie.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>За вашим запитом нічого не знайдено</p>
      )}
    </div>
  );
};
