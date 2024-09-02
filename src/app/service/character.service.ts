import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { CharacterRepository } from '../repository/character.repository';
import { CharacterResponse } from '../model/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters$ = new ReplaySubject<CharacterResponse>(1);
  public currentPage$ = new BehaviorSubject<number>(1);

  constructor(private characterRepository: CharacterRepository) {}

  public loadCharacters(index: number) {
    this.characterRepository.getCharacters(index).subscribe(response => {
      this.characters$.next(response.data.characters);
    });
    this.currentPage$.next(index);
  }

  getCharacters(): Observable<CharacterResponse> {
    return this.characters$.asObservable();
  }

  getCurrentPage(): Observable<Number> {
    return this.currentPage$.asObservable();
  }

  // getCharacterById(id: number): Observable<any> {
  //   return this.characterRepository.getCharacterById(id);
  // }
}
