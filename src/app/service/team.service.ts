import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable, toArray } from 'rxjs';
import { Team, TeamMember } from '../model/team.model';
import { TeamImpl } from '../model/team.model.impl';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private team$ = new BehaviorSubject<Team>(this.loadInitialTeam());
  private teamHistory$ = new ReplaySubject<Team>(3);

  private loadInitialTeam(): Team {
    const savedTeam = localStorage.getItem('team');
    return savedTeam ? JSON.parse(savedTeam) : new TeamImpl();
  }

  public setTeam(team: Team): void {
    this.team$.next(team);
    this.teamHistory$.next(team);
    localStorage.setItem('team', JSON.stringify(team));
  }

  public getTeam(): Observable<Team> {
    return this.team$.asObservable();
  }

  public getTeamHistory(): Observable<Team> {
    return this.teamHistory$.asObservable();
  }

  public addTeamMember(role: keyof Team, member: TeamMember): void {
    const currentTeam = this.team$.getValue();
    const updatedTeam = {
      ...currentTeam,
      [role]: member
    };
    this.setTeam(updatedTeam);
  }

  public clearTeam(): void {
    localStorage.removeItem('team');
    this.team$.next(new TeamImpl());
    this.teamHistory$.next(new TeamImpl());  // Limpa o histórico também
  }
}
