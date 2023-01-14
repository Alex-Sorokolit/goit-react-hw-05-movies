import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '77f4196daae31eca36e03f9aa498784a';

export async function getTrending() {
  try {
    const response = await axios.get(`trending/movie/week?api_key=${key}`);
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getSearchMovie(searchQuery, page) {
  try {
    const response = await axios.get(
      `search/movie?api_key=${key}&query=${searchQuery}&page=${page}&include_adult=false`
    );
    // console.log(response.data.results);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${key}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCast(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${key}`);
    // console.log(response.data.cast);
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function getReviews(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${key}`);
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

// повідомлення про помилки
