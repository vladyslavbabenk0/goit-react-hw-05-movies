import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 15px 25px;
  display: inline-block;
  font-size: 20px;
  transition: all 0.3s;
  border: 1px solid white;

  &.active {
    background-color: #172CAF;
    font-size: 25px;
    border: 0px solid ;
  }

  styled
`;
