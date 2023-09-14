import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 5px;
  transition: all 0.3s;

  &.active {
    background-color: #97010e;
    font-size: 25px;
  }
`;
