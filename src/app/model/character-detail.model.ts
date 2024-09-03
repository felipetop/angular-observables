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
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
    image: string;
}
  