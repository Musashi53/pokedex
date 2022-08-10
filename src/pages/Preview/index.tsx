import { Button } from "../../components/button/styles";
import * as P from "./styles";
import { Container } from "../../components/layout/styles";

const Preview = () => {
  return (
    <>
      <P.PreviewImgContent>

      </P.PreviewImgContent>
      <Container>
        <P.PreviewContent>
          <P.PreviewTitle>Your Pokedex!</P.PreviewTitle>
          <P.PreviewDescription>
            You can see all pokemons, search some pokemon for categories  search for name.
          </P.PreviewDescription>
          <Button>Begin</Button>
        </P.PreviewContent>
      </Container>
    </>
  );
};

export default Preview;
