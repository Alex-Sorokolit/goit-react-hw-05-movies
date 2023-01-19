import { useEffect, useState } from 'react';

export const useSessionStorage = (key, initialState = 1) => {
  const [data, setData] = useState(
    () => JSON.parse(sessionStorage.getItem(key)) ?? initialState
  );

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);
  return [data, setData];
};
