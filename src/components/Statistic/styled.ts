import { NavLink } from 'react-router';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #1f1e24;
  padding: 10px;
  border-radius: 10px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 400;
  font-size: 13px;
  padding: 10px;
  border-radius: 3px;
  opacity: 0.7;
  line-height: 1;

  &.active {
    font-weight: 600;
    background-color: #100f14;
  }
`;
