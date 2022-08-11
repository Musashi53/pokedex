import * as C from './styles';

type PokemonTypes = {
  type: {
    name: string;
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
  const pokemonTypes = data.types.map(({ type }) => type.name).join(' | ');
  return (
    <C.Card>
      <C.ImageContent>
        <C.Circle type={data.types[0].type.name}/>
        <C.Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
          alt={data.name }
        />
      </C.ImageContent>
      <C.Data>
        <C.Title>{data.name}</C.Title>
          <C.Type>{pokemonTypes}</C.Type>
          <C.Experience>{data.base_experience}</C.Experience>
      </C.Data>
    </C.Card>
  );
};

export default Card;
