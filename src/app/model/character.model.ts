export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterOrigin;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
export interface CharacterResponse {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string | null;
    };
    results: Character[];
}

export interface CharacterOrigin {
    name: string;
    url: string;
  }
  
export interface CharacterLocation {
name: string;
url: string;
}
  