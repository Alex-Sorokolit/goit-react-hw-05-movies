import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.nav`
  display: flex;
  justify-content: center;
  background: #0d1117;
  padding: 10px 0 15px 0px;
`;

export const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weit: 700;
  font-size: 30px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: orangered;
  }
`;
