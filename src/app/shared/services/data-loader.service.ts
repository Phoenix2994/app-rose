import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import TEAMS from '../../../assets/json/teams.json';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root',
})
export class DataLoaderService {
  $teamId: Subject<number> = new Subject();
  teamId: number;
  private teams: Team[] = TEAMS;
  constructor() {
    this.$teamId.subscribe((id: number) => {
      this.teamId = id;
    });
  }

  getTeams() {
    return this.teams;
  }

  getTeam(id: number) {
    return this.teams[id];
  }

  getTeamName(id: number) {
    return this.teams[id].name;
  }
}
