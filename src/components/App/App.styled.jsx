import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weit: 700;
  font-size: 25px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &.active {
    color: orangered;
  }
`;
export default NavItem;
