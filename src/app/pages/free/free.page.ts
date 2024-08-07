import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPlayer } from 'src/app/shared/model/player';
import { Team } from 'src/app/shared/model/team';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';

@Component({
  selector: 'app-free',
  templateUrl: './free.page.html',
  styleUrls: ['./free.page.scss'],
})
export class FreePage implements OnInit {
  players: IPlayer[] = [];
  teamId: number;
  displayedColumns: string[] = ['img', 'name', 'mantraRole', 'team', 'quot'];
  teams: Team[];
  mantraRoles = ['POR', 'DC', 'DD', 'DS', 'M', 'C', 'E', 'W', 'T', 'A', 'PC'];

  roleToFilter: string;
  nameToFilter: string = '';

  constructor(private dataLoader: DataLoaderService, private router: Router) { }

  ngOnInit() {
    this.players = [...this.dataLoader.getFreePlayers()];
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
      },
    });
  }

  filter() {
    this.players = [...this.dataLoader.getFreePlayers()].filter(
      (player: IPlayer) => {
        return (
          (this.roleToFilter ? player?.mantraRole?.toUpperCase()?.includes(this.roleToFilter) : true) &&
          (this.nameToFilter
            ? player.name
              .toLowerCase()
              .includes(this.nameToFilter.toLowerCase())
            : true)
        );
      }
    );
  }
}
