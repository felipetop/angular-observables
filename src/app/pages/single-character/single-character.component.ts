import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../service/character.service';
import { Character } from '../../model/character-detail.model';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {
  public character!: Character;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const characterId = +params['id']; // Converte a string do ID em um número
      this.characterService.getCharacterById(characterId).subscribe(character => {
        this.character = character.data.character;
      });
    });
  }
}
