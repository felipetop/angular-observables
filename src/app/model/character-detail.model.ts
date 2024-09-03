export interface CharacterData {
    data: {
        character: Character
    }    
}

export interface Character {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    type: string;
    origin: {
      name: string;
      dimension: string;
    };
    location: {
      name: string;
      dimension: string;
    };
    image: string;
    episode: Array<episode>
}

export interface episode {
    id: string;
    name: string;
    air_date: string;
    episode: string;
}
  