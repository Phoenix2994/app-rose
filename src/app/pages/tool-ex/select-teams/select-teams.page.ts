import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPlayer } from 'src/app/shared/model/player';
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
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<IPlayer>(
    this.allowMultiSelect,
    this.initialSelection
  );
  displayedColumns: string[] = ['role', 'name', 'select'];
  ownPlayers: IPlayer[];
  otherPlayers: IPlayer[];
  constructor(private dataLoader: DataLoaderService, private router: Router) {}

  ngOnInit() {
    this.teams = this.dataLoader.getTeams();
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

  changeFirstTeam(event) {
    this.firstTeamId = event.detail.value;
    this.ownPlayers = [...this.dataLoader.getTeam(this.firstTeamId).players]
      .concat(
        this.dataLoader.getTeam(this.firstTeamId).borrowed,
        this.dataLoader.getTeam(this.firstTeamId).youth
      )
      .filter(
        (player) =>
          player.contractType === 'TITOLO DEFINITIVO' ||
          player.contractType === 'PRESTITO (OBBLIGO)'
      );
  }

  changeSecondTeam(event) {
    this.secondTeamId = event.detail.value;
    this.otherPlayers = [...this.dataLoader.getTeam(this.secondTeamId).players]
      .concat(
        this.dataLoader.getTeam(this.secondTeamId).borrowed,
        this.dataLoader.getTeam(this.secondTeamId).youth
      )
      .filter(
        (player) =>
          player.contractType === 'TITOLO DEFINITIVO' ||
          player.contractType === 'PRESTITO (OBBLIGO)'
      );
  }

  navigateToTool() {
    this.router.navigate(['/tool-exchange'], {
      queryParams: {
        firstTeamId: this.firstTeamId,
        secondTeamId: this.secondTeamId,
      },
    });
  }

  toggleSelect(player) {
    this.selection.toggle(player);
  }
}
