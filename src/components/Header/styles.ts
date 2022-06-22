import styled from "styled-components";
import { mainColor } from "../../styles/Variables";

interface ItoggleProps { toggle: boolean }

export const Header = styled.header`
  height: 3.5rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: initial;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;

  @media screen and (min-width: 768px) { top: 0; }
`;

export const HeaderContainer = styled.div`
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  font-weight: 600;
  letter-spacing: -2px;
  font-size: 1.25rem;
`;

export const Nav = styled.nav`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: ${(props: ItoggleProps) => props.toggle ? `0` : `-100%`};
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: unset;
    border-radius: 1rem 1rem 0 0;
    transition: .3s;
    padding: 3rem 0 5rem 2rem;
    z-index: 10000;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat();

  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  } 
`;

export const NavItem = styled.li`
  margin-bottom: 1rem;

  a {
    transition: .3s;
    
    &:hover {
      color: ${mainColor};
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
