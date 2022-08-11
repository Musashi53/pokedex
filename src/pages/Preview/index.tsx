import { Button } from "../../components/button/styles";
import * as P from "./styles";
import { Container } from "../../components/layout/styles";

const Preview = () => {
  return (
    <>
      <P.ImgContent>

      </P.ImgContent>
      <Container>
        <P.Content>
          <P.Title>Your Pokedex!</P.Title>
          <P.Description>
            You can see all pokemons, search some pokemon for categories  search for name.
          </P.Description>
          <Button>Begin</Button>
        </P.Content>
      </Container>
    </>
  );
};

export default Preview;
