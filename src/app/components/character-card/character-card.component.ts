import { Component, Input } from '@angular/core';
import { Character } from '../../model/character.model';
import { TeamService } from '../../service/team.service';
import { Team } from '../../model/team.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  @Input() character!: Character;
  selectedRole: keyof Team = 'manager';  // Valor padrão

  constructor(private teamService: TeamService) {}

  onCardClick(): void {
    const teamMember = {
      id: this.character.id,
      name: this.character.name,
      image: this.character.image
    };

    this.teamService.addTeamMember(this.selectedRole, teamMember);
  }
}
