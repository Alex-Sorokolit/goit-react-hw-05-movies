import { CgSearch } from 'react-icons/cg';
import {
  SearchWrapper,
  SearchForm,
  SearchButton,
  SearchInput,
} from './SearchBox.styled';

export const SearchBox = ({ value, onSubmit, onChange }) => {
  return (
    <SearchWrapper>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={event => onChange(event.target.value)}
        />
        <SearchButton type="submit" onClick={onSubmit}>
          <span>
            <CgSearch />
          </span>
        </SearchButton>
      </SearchForm>
    </SearchWrapper>
  );
};
