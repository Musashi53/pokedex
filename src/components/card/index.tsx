import * as C from './styles';
import * as L from '../layout/styles';
import { Type } from '../type/styles';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

type PokemonTypes = {
  type: {
    name: any;
  }
}

type Pokemon = {
  data: {
    id: number;
    name: string;
    types: PokemonTypes[]
  };
}

const Card = ({ data }: Pokemon) => {
  const navigate = useNavigate();

  const handleClick = (data: any) => {
    navigate(`/profile/${data.name}`);
  }
  
  return (
    <C.Card onClick={() => handleClick(data)}>
      <C.ImageContent>
        <C.Circle type={data.types[0].type.name}/>
        <C.Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
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
            <Type key={type.name} type={type.name}>{type.name}</Type>
          ))}
        </L.Flex>
      </L.Flex>
    </C.Card>    
  );
};

export default Card;
