import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharacterService } from '../../service/character.service';
import { debounceTime } from 'rxjs/operators';
import { CharacterResponse } from '../../model/character.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();
  characters: CharacterResponse | undefined;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(
      debounceTime(300)
    ).subscribe(name => {
      this.characterService.filterCharacters(name);
    });
  }
}
