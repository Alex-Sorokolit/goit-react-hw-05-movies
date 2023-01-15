import styled from 'styled-components';
export const Main = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GaleryItem = styled.li`
  width: 200px;
  height: 300px;
  background-color: grey;
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 300px;
`;
export const Cover = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`;
