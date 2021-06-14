import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/shared/model/team';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';

@Component({
  selector: 'app-select-teams',
  templateUrl: './select-teams.page.html',
  styleUrls: ['./select-teams.page.scss'],
})
export class SelectTeamsPage implements OnInit {
  firstTeamId: number;
  secondTeamId: number;
  teams: Team[];

  constructor(private dataLoader: DataLoaderService, private router: Router) {}

  ngOnInit() {
    this.teams = this.dataLoader.getTeams();
  }

  changeFirstTeam(event) {
    this.firstTeamId = event.detail.value;
  }
  changeSecondTeam(event) {
    this.secondTeamId = event.detail.value;
  }

  navigateToTool() {
    this.router.navigate(['/tool-exchange'], {
      queryParams: {
        firstTeamId: this.firstTeamId,
        secondTeamId: this.secondTeamId,
      },
    });
  }
}
