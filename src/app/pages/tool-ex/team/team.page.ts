import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: number;
  displayedColumns: string[] = ['role', 'name', 'team', 'value', 'quot'];
  teams: Team[];

  constructor(
    private dataLoader: DataLoaderService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.teamId = +this.route.snapshot.paramMap.get('teamId');
    this.players = [...this.dataLoader.getTeam(this.teamId).players];
  }

  navigateToPlayer(id: number) {
    this.router.navigate([
      `/tool-exchange/team/${this.teamId}/player/${id}/${this.id}`,
    ]);
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
}
