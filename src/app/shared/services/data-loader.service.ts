import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import TEAMS from '../../../assets/json/teams.json';
import FREE_PLAYERS from '../../../assets/json/free_players.json';
import { Team } from '../model/team';
import { IPlayer } from '../model/player';

@Injectable({
  providedIn: 'root',
})
export class DataLoaderService {
  $teamId: Subject<number> = new Subject();
  teamId: number;
  private teams: Team[] = TEAMS;
  private freePlayers: IPlayer[] = FREE_PLAYERS;
  constructor() {
    this.$teamId.subscribe((id: number) => {
      this.teamId = id;
    });
  }

  getTeams() {
    return this.teams;
  }

  getTeam(id: number) {
    return this.teams[id - 1];
  }

  getTeamName(id: number) {
    return this.teams[id - 1].name;
  }

  getFreePlayers() {
    return this.freePlayers;
  }
}
