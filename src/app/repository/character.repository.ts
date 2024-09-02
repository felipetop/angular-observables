import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getAllCharactersGraphQl } from './queries/all-characters.graphql';

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

  public (id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }
}
