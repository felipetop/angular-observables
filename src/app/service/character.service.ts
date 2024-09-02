import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { CharacterRepository } from '../repository/character.repository';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters$ = new ReplaySubject<any[]>(1);

  constructor(private characterRepository: CharacterRepository) {}

  public loadCharacters() {
    console.log('foi aqui')
    this.characterRepository.getCharacters().subscribe(response => {
      this.characters$.next(response.results);
    });
  }

  getCharacters(): Observable<any[]> {
    return this.characters$.asObservable();
  }

  getCharacterById(id: number): Observable<any> {
    return this.characterRepository.getCharacterById(id);
  }
}
