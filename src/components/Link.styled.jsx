import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: black;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
