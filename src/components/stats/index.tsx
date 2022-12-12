import { IProfilePokemon } from '../../interfaces/pokemon';
// import { Flex } from '../layout/styles';
import * as S from './styles';

const Stats = ({ pokemon }: IProfilePokemon) => {
  
  return (
    <>
      <S.Title type={pokemon.types[0].type.name}>Base Stats</S.Title>
      <S.Content>
        <S.List width="30px">
          <S.ListItem><span>HP</span></S.ListItem>
          <S.ListItem><span>ATK</span></S.ListItem>
          <S.ListItem><span>DEF</span></S.ListItem>
          <S.ListItem><span>SATK</span></S.ListItem>
          <S.ListItem><span>SDEF</span></S.ListItem>
          <S.ListItem><span>SPD</span></S.ListItem>
        </S.List>
        
        <S.List width="20px">
          {pokemon.stats.map(stats => <S.ListItem>{stats.base_stat}</S.ListItem>)}
        </S.List>

        <S.List width="75%">
          {pokemon.stats.map(stats => <S.ListItem><S.Progress type={pokemon.types[0].type.name} value={stats.base_stat} max='150'></S.Progress></S.ListItem>)}
        </S.List>        
      </S.Content>
    </>
  )
}

export default Stats;
