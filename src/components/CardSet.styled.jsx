import styled from 'styled-components';
export const CardSet = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;
export const CardItem = styled.li`
  flex-basis: auto;
  max-width: 200px;
  & img {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
  }
`;
