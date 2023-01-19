// import { useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {
  SearchWrapper,
  SearchForm,
  SearchButton,
  SearchInput,
} from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams(); // записує searchQuery в url

  function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.search.value.trim().toLowerCase();

    if (query === '') {
      toast.error('Напишіть назву фільму в поле пошуку');
      return;
    }

    if (searchParams.get('query') === query) {
      toast.error(`Проявляйте креатив, пришіть різні запити`);
      return;
    }
    setSearchParams(query !== '' ? { query } : {});
    onSubmit();
  }

  return (
    <SearchWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchButton type="submit">
          <span>
            <CgSearch />
          </span>
        </SearchButton>
      </SearchForm>
    </SearchWrapper>
  );
};
