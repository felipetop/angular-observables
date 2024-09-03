import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Team, TeamMember } from '../model/team.model';
import { TeamImpl } from '../model/team.model.impl';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  // ReplaySubject com buffer de 3 para manter o histórico das três últimas equipes
  private team$ = new ReplaySubject<Team>(3);

  constructor() {
    this.team$.next(new TeamImpl());
  }

  public setTeam(team: Team): void {
    this.team$.next(team);
  }

  public getTeam(): Observable<Team> {
    return this.team$.asObservable();
  }

  public addTeamMember(role: keyof Team, member: TeamMember): void {
    this.getTeam().subscribe(currentTeam => {
      const updatedTeam = {
        ...currentTeam,
        [role]: member
      };
      this.setTeam(updatedTeam);
    }).unsubscribe();
  }

  public mockTeamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      id: 2,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },
    {
      id: 3,
      name: 'Summer Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    }
  ];
  
  public mockTeam: Team = {
    manager: this.mockTeamMembers[0],
    coordinator: this.mockTeamMembers[0],
    scrumMaster: this.mockTeamMembers[1],
    productOwner: this.mockTeamMembers[2],
    developerOne: this.mockTeamMembers[1],
    developerTwo: this.mockTeamMembers[2],
    developerThree: this.mockTeamMembers[0],
    qualityAssuranceOne: this.mockTeamMembers[1],
    qualityAssuranceTwo: this.mockTeamMembers[2],
    pet: this.mockTeamMembers[0]  // Se desejar adicionar um mascote
  };
}
