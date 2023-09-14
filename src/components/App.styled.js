import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 15px 25px;
  display: inline-block;
  font-size: 20px;
  transition: all 0.3s;

  &.active {
    background-color: #97010e;
    font-size: 25px;
  }
`;
