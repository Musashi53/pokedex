export interface PokemonTypes {
  type: {
    name: any;
  }
}

export interface Abilities {
  abilities: {
    ability: {
      name: string;
    }
  }
}

export interface Stats {
  
    base_stat: string;
    stat: {
      name: string;
    }
  
}

export interface Pokemon {
  name: string;
  id: number;
  types: PokemonTypes[];
  stats: Stats[];
}

export interface ProfilePokemon {
  pokemon: {
    name: string;
    id: number;
    types: PokemonTypes[];
    stats: Stats[];
  }
}