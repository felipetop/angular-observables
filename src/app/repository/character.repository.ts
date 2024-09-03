import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getAllCharactersGraphQl } from './queries/all-characters.graphql';
import { getCharacterByIdGraphQl } from './queries/get-character-by-id.graphql';

@Injectable({
  providedIn: 'root'
})
export class CharacterRepository {
  private readonly endpoint = 'https://rickandmortyapi.com/graphql';
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) {}

  public getCharacters(page: number = 1, name?: string): Observable<any> {
    const query = getAllCharactersGraphQl;
    const variables = { page: page, name: name || null };

    return this.httpClient.post<any>(this.endpoint, { query, variables });
  }

  public getCharacter(id: number): Observable<any> {
    const query = getCharacterByIdGraphQl;
    const variables = { id: id };

    return this.httpClient.post<any>(this.endpoint, { query, variables });
  }
}
