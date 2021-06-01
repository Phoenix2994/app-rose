import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinBalance } from 'src/app/shared/model/fin-balance';
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
  constructor(private dataLoader: DataLoaderService, private router: Router) {}

  ngOnInit() {
    this.teams = this.dataLoader.getTeams();
    this.teamId = this.dataLoader.teamId;
    this.balance = this.dataLoader.getTeam(this.teamId).finBalance;
    this.dataLoader.$teamId.subscribe((value: number) => {
      this.teamId = value;
      this.balance = this.dataLoader.getTeam(this.teamId).finBalance;
    });
  }

  changeTeam(event) {
    this.dataLoader.$teamId.next(event.detail.value);
  }

  navigateToRenewal() {
    this.router.navigate(['/tabs/renewal'], {
      queryParams: {
        teamId: this.teamId,
      },
    });
  }
}
