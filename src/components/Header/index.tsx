import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import { Container } from "../layout/styles";
import { MenuButton, CloseButton } from "../Buttons/styles";
import { Header,
  HeaderContainer,
  Logo,
  Nav,
  NavList,
  NavItem,

} from "./styles";

const HeaderComponent = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Header>
      <Container>
        <HeaderContainer>
          <Logo href="#">Pokedex</Logo>
          <Nav toggle={toggle}>
            <NavList>
              <NavItem>
                <Link to="/">home</Link>
              </NavItem>
              <NavItem>
                <Link to="/allpokemons">all pokemons</Link>
              </NavItem>
              <NavItem>
                <Link to="/categories">categories</Link>
              </NavItem>
              <NavItem>
                <Link to="/search">search</Link>
              </NavItem>
            </NavList>
            <CloseButton onClick={() => setToggle(false)}><RiCloseFill/></CloseButton>
          </Nav>
          <MenuButton onClick={() => setToggle(true)}><GiHamburgerMenu/></MenuButton>
        </HeaderContainer>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
