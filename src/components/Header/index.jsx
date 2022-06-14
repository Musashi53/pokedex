import { useState } from "react";
import { Container } from "../../styles/GlobalStyle";
import { MenuButton, CloseButton } from "../Buttons/styles";
import { Header,
  HeaderContainer,
  Logo,
  Nav,
  NavList,
  NavItem,
  NavLink

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
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#search">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#categories">Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#allpokemons">All Pokemons</NavLink>
              </NavItem>
            </NavList>
            <CloseButton onClick={() => setToggle(false)}>Close</CloseButton>
          </Nav>
          <MenuButton onClick={() => setToggle(true)}>Menu</MenuButton>
        </HeaderContainer>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
