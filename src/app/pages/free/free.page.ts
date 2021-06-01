import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/shared/model/player';
import { Team } from 'src/app/shared/model/team';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';

@Component({
  selector: 'app-free',
  templateUrl: './free.page.html',
  styleUrls: ['./free.page.scss'],
})
export class FreePage implements OnInit {
  players: Player[] = [];
  teamId: number;
  displayedColumns: string[] = ['role', 'name', 'team', 'quot'];
  teams: Team[];

  roleToFilter: string;
  nameToFilter: string = '';

  constructor(private dataLoader: DataLoaderService, private router: Router) {}

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
      (player: Player) => {
        return (
          (this.roleToFilter ? player.role === this.roleToFilter : true) &&
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
