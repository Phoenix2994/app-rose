import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPlayer } from 'src/app/shared/model/player';
import { Team } from 'src/app/shared/model/team';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  players: IPlayer[] = [];
  teamId: number;
  displayedColumns: string[] = ['img', 'name', 'team', 'quot', 'value'];
  teams: Team[];
  youthPlayers: IPlayer[] = [];

  constructor(private dataLoader: DataLoaderService, private router: Router) {}

  ngOnInit() {
    this.teams = this.dataLoader.getTeams();
    this.teamId = this.dataLoader.teamId;
    this.youthPlayers = [...this.dataLoader.getTeam(this.teamId).youth];
    this.youthPlayers.forEach((player) => (player.youthFlag = true));
    this.players = [
      ...this.dataLoader.getTeam(this.teamId).players.concat(this.youthPlayers),
    ];
    this.dataLoader.$teamId.subscribe((value: number) => {
      this.teamId = value;
      this.youthPlayers = [...this.dataLoader.getTeam(this.teamId).youth];
      this.youthPlayers.forEach((player) => (player.youthFlag = true));
      this.players = [
        ...this.dataLoader
          .getTeam(this.teamId)
          .players.concat(this.youthPlayers),
      ];
    });
  }

  changeTeam(event) {
    this.dataLoader.$teamId.next(event.detail.value);
  }
  computeRoleColor(role: string) {
    switch (role) {
      case 'P':
        return '#F8AB29';
      case 'D':
        return '#63C623';
      case 'C':
        return '#2E6BE6';
      case 'A':
        return '#F21A3C';
    }
  }

  navigateToPlayer(id: number) {
    this.router.navigate(['/tabs/player'], {
      queryParams: {
        id,
        teamId: this.teamId,
      },
    });
  }
}
