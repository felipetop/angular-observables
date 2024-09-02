import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  characterResponse$ = this.characterService.getCharacters();

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.loadCharacters();
  }

}
