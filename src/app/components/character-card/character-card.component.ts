import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../model/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
