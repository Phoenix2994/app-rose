import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOGO_MAP } from 'src/app/shared/maps/teams-logo';
import { Team } from 'src/app/shared/model/team';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage implements OnInit {
  teams: Team[];
  logoMap = LOGO_MAP;

  constructor(private dataLoader: DataLoaderService, private router: Router) {}

  ngOnInit() {
    this.teams = this.dataLoader.getTeams();
  }

  navigateToTeam(teamId: number) {
    this.dataLoader.$teamId.next(teamId);
    this.router.navigate([`/tabs`]);
  }
}
