import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { Observable } from 'rxjs';
import { Team } from '../../model/team.model';

@Component({
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.css']
})
export class TeamSelectionComponent implements OnInit {
  
  public team$!: Observable<Team>;

  constructor(private teamService: TeamService) { }

  public ngOnInit(): void {
    this.team$ = this.teamService.getTeam();
  }

}
