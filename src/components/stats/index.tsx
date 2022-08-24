import { ProfilePokemon } from '../../interfaces/pokemon';
import { Flex } from '../layout/styles';
import * as S from './styles';

const Stats = ({ pokemon }: ProfilePokemon) => {
  console.log(pokemon.stats.map(stat => stat.stat.name));
  return (
    <>
      <h2>{pokemon.name}</h2>
      <Flex
      justify='space-between'

      >
        {pokemon.stats.map(stats => (
          <>
            <ul>
              <li key={1}>{stats.stat.name}</li>
            </ul>

            <ul>
              <li key={1}>{stats.base_stat}</li>
            </ul>
          </>
          

        ))}
        

        <ul>
          
        </ul>

        <div>
          <S.Progress value='23' max='100'></S.Progress>
          <S.Progress value='70' max='100'></S.Progress>
          <S.Progress value='23' max='100'></S.Progress>
          <S.Progress value='23' max='100'></S.Progress>
          <S.Progress value='23' max='100'></S.Progress>
          <S.Progress value='23' max='100'></S.Progress>
        </div>

        <ul>
          <li>188</li>
          <li>98</li>
          <li>81</li>
          <li>112</li>
          <li>94</li>
          <li>121</li>
          <li>min</li>
        </ul>

        <ul>
          <li>188</li>
          <li>98</li>
          <li>81</li>
          <li>112</li>
          <li>94</li>
          <li>121</li>
          <li>max</li>
        </ul>
      </Flex>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolorum, esse suscipit a necessitatibus eveniet distinctio numquam incidunt architecto ea ipsum illo possimus ex sapiente, voluptate quisquam ut in eius.
      </p>

      <h2>Types Defences</h2>
      <span>The Effectiveness of each tye on Charmander.</span>
      
      
    </>
  )
}

export default Stats;
