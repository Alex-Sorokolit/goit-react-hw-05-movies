import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '77f4196daae31eca36e03f9aa498784a';

export async function getTrending() {
  try {
    const response = await axios.get(`trending/movie/week?api_key=${key}`);

    // Забираємо тільки ті дані які потрібні
    const trendings = response.data.results.map(
      ({ id, poster_path, original_title }) => ({
        id,
        poster_path,
        original_title,
      })
    );

    return trendings;
  } catch (error) {
    console.log(error);
  }
}

export async function getSearchMovie(searchQuery, page) {
  try {
    const response = await axios.get(
      `search/movie?api_key=${key}&query=${searchQuery}&page=${page}&include_adult=false`
    );

    // Забираємо тільки ті дані які потрібні
    const results = response.data.results.map(
      ({ id, poster_path, original_title }) => ({
        id,
        poster_path,
        original_title,
      })
    );
    const total = response.data.total_results;
    const totalPages = response.data.total_pages;

    return { results, total, totalPages };
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${key}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCast(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${key}`);

    console.log(response.data.cast);
    // Забираємо тільки ті дані які потрібні
    const filteredCast = response.data.cast.map(
      ({ id, profile_path, character, original_name }) => ({
        id,
        profile_path,
        character,
        original_name,
      })
    );

    return filteredCast;
  } catch (error) {
    console.log(error);
  }
}

export async function getReviews(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${key}`);
    console.log(response.data.results);
    // Забираємо тільки ті дані які потрібні
    const filteredReviews = response.data.results.map(
      ({ id, author, content }) => ({
        id,
        author,
        content,
      })
    );
    return filteredReviews;
  } catch (error) {
    console.log(error);
  }
}

export const posterMovieUrl = url => {
  return url !== null
    ? `https://image.tmdb.org/t/p/w500/${url}`
    : 'https://cdn.pixabay.com/photo/2013/07/12/12/01/film-145099_960_720.png';
};

export const actorImgUrl = url => {
  return url !== null
    ? `https://image.tmdb.org/t/p/w500/${url}`
    : 'https://cdn.pixabay.com/photo/2014/04/03/11/50/drama-312318_960_720.png';
};

// зробити лоадери
