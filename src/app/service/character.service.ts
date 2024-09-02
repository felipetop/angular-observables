import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { CharacterRepository } from '../repository/character.repository';
import { CharacterResponse } from '../model/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters$ = new ReplaySubject<CharacterResponse>(1);

  constructor(private characterRepository: CharacterRepository) {}

  public loadCharacters() {
    this.characterRepository.getCharacters(1).subscribe(response => {
      this.characters$.next(response.data.characters);
    });
  }

  getCharacters(): Observable<CharacterResponse> {
    return this.characters$.asObservable();
  }

  // getCharacterById(id: number): Observable<any> {
  //   return this.characterRepository.getCharacterById(id);
  // }
}
