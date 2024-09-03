import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { CharacterRepository } from '../repository/character.repository';
import { CharacterResponse } from '../model/character.model';
import { CharacterData } from '../model/character-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters$ = new ReplaySubject<CharacterResponse>(1);
  public currentPage$ = new BehaviorSubject<number>(1);

  public searchName: string = '';

  constructor(private characterRepository: CharacterRepository) {}

  public loadCharacters(index: number) {
    this.characterRepository.getCharacters(index, this.searchName).subscribe(response => {
      this.characters$.next(response.data.characters);
    });
    this.currentPage$.next(index);
  }

  public filterCharacters(name: string) {
    this.searchName = name;
    this.loadCharacters(1);
  }

  public getCharacters(): Observable<CharacterResponse> {
    return this.characters$.asObservable();
  }

  public getCharacterById(id: number): Observable<CharacterData> {
    return this.characterRepository.getCharacter(id);
  }
}
