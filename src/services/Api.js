const key = '77f4196daae31eca36e03f9aa498784a';

export const getTrending = (nextQuery, page) => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Пошук за запитом не дав результатів`));
  });
};
