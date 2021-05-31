import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/shared/model/player';
import { Team } from 'src/app/shared/model/team';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';

@Component({
  selector: 'app-youth',
  templateUrl: './youth.page.html',
  styleUrls: ['./youth.page.scss'],
})
export class YouthPage implements OnInit {
  players: Player[] = [];
  teamId: number;
  displayedColumns: string[] = ['role', 'name', 'team', 'quot', 'value'];
  teams: Team[];

  constructor(private dataLoader: DataLoaderService, private router: Router) {}

  ngOnInit() {
    this.teams = this.dataLoader.getTeams();
    this.teamId = this.dataLoader.teamId;
    this.players = [...this.dataLoader.getTeam(this.teamId).youth];
    this.dataLoader.$teamId.subscribe((value: number) => {
      this.teamId = value;
      this.players = [...this.dataLoader.getTeam(this.teamId).youth];
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
