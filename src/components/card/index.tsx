import * as C from './styles';
import * as L from '../layout/styles';

type PokemonTypes = {
  type: {
    name: any;
  }
}

type Pokemon = {
  data: {
    id: number;
    name: string;
    base_experience: number;
    types: PokemonTypes[]
  };
}

const Card = ({ data }: Pokemon) => {
  return (
    <C.Card>
      <C.ImageContent>
        <C.Circle type={data.types[0].type.name}/>
        <C.Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
          alt={data.name}
        />
      </C.ImageContent>
      <L.Flex
        maxWidth='170px'
        direction='column'
        align='center'
        justify='center'
      >
        <C.Title>{data.name}</C.Title>
        <L.Flex
          justify='center'
          columnGap='.5rem'
        >
          {data.types.map(({ type }: PokemonTypes) => (
            <C.Type key={type.name} type={type.name}>{type.name}</C.Type>
          ))}
        </L.Flex>
      </L.Flex>
    </C.Card>
  );
};

export default Card;
