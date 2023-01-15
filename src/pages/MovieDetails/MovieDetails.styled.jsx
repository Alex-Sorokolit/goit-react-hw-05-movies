import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: block;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0d1117;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: start;
    justify-content: center;
    background: white;
  }
  & img {
    z-index: 1;

    margin-bottom: 10px;
    -webkit-box-shadow: 0px 10px 36px -9px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 36px -9px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 36px -9px rgba(0, 0, 0, 0.68);
    ${'' /* object-fit: contain; */}
    @media screen and (min-width: 768px) {
      margin-left: 40px;
    }
  }
`;

export const MovieTitle = styled.h2`
  background: #0d1117;
  color: white;
  padding: 10px 25px;
  @media screen and (min-width: 768px) {
    background: linear-gradient(
      90deg,
      #0d1117 15%,
      #0d1117 27%,
      #0d111705 56%,
      #0d111703 85%,
      #0d111700 85%
    );
  }
`;

export const GenresItem = styled.li`
  display: 'inline';
  marginleft: '15px';
  color: 'orangered';
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const LinkBtn = styled(NavLink)`
  display: inline-block;
  minwidth: 100px;
  border-radius: 4px;
  background: #0d1117;
  color: white;
  padding: 10px;
  text-decoration: none;

  &:hover {
    background: orangered;
  }
`;
