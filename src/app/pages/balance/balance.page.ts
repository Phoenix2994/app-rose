import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinBalance } from 'src/app/shared/model/fin-balance';
import { SeasonBalance } from 'src/app/shared/model/season-balance';
import { Team } from 'src/app/shared/model/team';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  teams: Team[];
  teamId: number;
  balance: FinBalance;
  seasons: SeasonBalance[];
  seasonBalance: SeasonBalance;
  constructor(private dataLoader: DataLoaderService, private router: Router) {}

  ngOnInit() {
    this.teams = this.dataLoader.getTeams();
    this.teamId = this.dataLoader.teamId;
    this.balance = this.dataLoader.getTeam(this.teamId).finBalance;
    this.seasons = [...this.balance.seasons];
    this.seasonBalance = this.seasons[0];
    this.dataLoader.$teamId.subscribe((value: number) => {
      this.teamId = value;
      this.balance = this.dataLoader.getTeam(this.teamId).finBalance;
      this.seasons = [...this.balance.seasons];
      this.seasonBalance = this.seasons[0];
    });
  }

  changeTeam(event) {
    this.dataLoader.$teamId.next(event.detail.value);
  }

  changeSeason(event) {
    this.seasonBalance = this.seasons.filter(
      (season) => season.season === event.detail.value
    )[0];
  }

  navigateToRenewal() {
    this.router.navigate(['/tabs/renewal'], {
      queryParams: {
        teamId: this.teamId,
      },
    });
  }
}
