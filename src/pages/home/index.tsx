import { Button } from "../../components/Buttons/styles";
import { Home, HomeImgContent, HomeContent, HomeTitle, HomeDescription } from "../../components/home/styles";
import { Container } from "../../components/layout/styles";

const HomePage = () => {
  return (
    <Home>
      <HomeImgContent>

      </HomeImgContent>
      <Container>
        <HomeContent>
          <HomeTitle>Your Pokedex!</HomeTitle>
          <HomeDescription>
            You can see all pokemons, search some pokemon for categories  search for name.
          </HomeDescription>
          <Button>Begin</Button>
        </HomeContent>
      </Container>
    </Home>
  );
};

export default HomePage;
