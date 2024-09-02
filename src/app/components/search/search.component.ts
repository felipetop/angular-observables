import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharacterService } from 'src/app/service/character.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { CharacterResponse } from 'src/app/model/character.model';

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
      this.characterService.loadCharacters(1, name);
    });
  }
}
