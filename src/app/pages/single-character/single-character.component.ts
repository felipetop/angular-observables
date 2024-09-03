import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

}
