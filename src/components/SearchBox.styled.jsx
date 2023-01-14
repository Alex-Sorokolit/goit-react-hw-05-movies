import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #0d1117;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 50%;
  max-width: 200px;
  background-color: #fff;
  border-radius: 3px;
  height: 30px;
  margin-bottom: 20px;
`;

export const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 0;
  opacity: 0.6;
  cursor: pointer;
  outline: none;
  color: black;

  &:hover {
    opacity: 1;
  }
`;

// export const SearchBattonLabel = styled.span`
//   font-size: 25px;
//   padding: 0;
//   border: 0;
//   color: black;
// `;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
