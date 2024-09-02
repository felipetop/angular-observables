import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  characters: any[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    console.log('foi aqui 1')
    this.characterService.loadCharacters();
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

}
