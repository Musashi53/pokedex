export interface IPokemonTypes {
  type: {
    name:
    'steel' |
    'fire' |
    'grass' |
    'electric' |
    'water' |
    'ice' |
    'ground' |
    'rock' |
    'fairy' |
    'poison' |
    'ghost' |
    'bug' |
    'dragon' |
    'psychic' |
    'flying' |
    'fighting' |
    'normal';
  }
}

export interface IAbilities {
  abilities: {
    ability: {
      name: string;
    }
  }
}

export interface IStats {
  base_stat: string;
  stat: {
    name: string;
  }
  
}

export interface IPokemon {
  name: string;
  id: number;
  types: IPokemonTypes[];
  stats: IStats[];
}

export interface IProfilePokemon {
  pokemon: {
    name: string;
    id: number;
    types: IPokemonTypes[];
    stats: IStats[];
  }
}