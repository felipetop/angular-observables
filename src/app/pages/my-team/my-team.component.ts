import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
import { TeamService } from '../../service/team.service';
import { Team } from '../../model/team.model';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {
  public teamHistory$!: Observable<Team[]>;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamHistory$ = this.teamService.getTeamHistory().pipe(
      scan<Team, Team[]>((acc: Team[], team: Team) => [...acc, team], [])
    );
  }
}
