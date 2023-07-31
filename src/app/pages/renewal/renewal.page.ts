import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { IPlayer } from 'src/app/shared/model/player';
import { Team } from 'src/app/shared/model/team';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';

@Component({
  selector: 'app-renewal',
  templateUrl: './renewal.page.html',
  styleUrls: ['./renewal.page.scss'],
})
export class RenewalPage implements OnInit {
  players: IPlayer[] = [];
  teamId: number;
  displayedColumns: string[] = [
    'select',
    'img',
    'name',
    'quot',
    'value',
    'nextContractRenewal',
    'nextPaymentValue',
  ];
  teams: Team[];
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<IPlayer>(
    this.allowMultiSelect,
    this.initialSelection
  );
  finalRenewal: number = 0;

  constructor(private dataLoader: DataLoaderService) { }

  ngOnInit() {
    this.teams = this.dataLoader.getTeams();
    this.teamId = this.dataLoader.teamId;
    this.finalRenewal = 0;
    this.dataLoader.getTeam(this.teamId).finBalance.seasons.find((season) => {
      return season.season === '2023-24';
    }).outings.renewals || 0;
    this.players = [...this.dataLoader.getTeam(this.teamId).players]
      .concat(
        this.dataLoader.getTeam(this.teamId).borrowed,
        this.dataLoader.getTeam(this.teamId).youth
      )
      .filter((player) => {
        return (
          (player.contractType === 'TITOLO DEFINITIVO' ||
            player.contractType === 'PRESTITO (OBBLIGO)')
          // && !player.paymentValue
        );
      });
    this.dataLoader.$teamId.subscribe((value: number) => {
      this.selection.clear();
      this.teamId = value;
      this.finalRenewal = 0;
      this.dataLoader
        .getTeam(this.teamId)
        .finBalance.seasons.find((season) => {
          return season.season === '2023-24';
        }).outings.renewals || 0;
      this.players = [...this.dataLoader.getTeam(this.teamId).players]
        .concat(
          this.dataLoader.getTeam(this.teamId).borrowed,
          this.dataLoader.getTeam(this.teamId).youth
        )
        .filter((player) => {
          return (
            (player.contractType === 'TITOLO DEFINITIVO' ||
              player.contractType === 'PRESTITO (OBBLIGO)')
            // && !player.paymentValue
          );
        });
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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.players.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.players.forEach((row) => this.selection.select(row));
    this.finalRenewal = 0;
    this.dataLoader.getTeam(this.teamId).finBalance.seasons.find((season) => {
      return season.season === '2023-24';
    }).outings.renewals || 0;
    this.selection.selected.forEach((player) => {
      this.finalRenewal += player.nextPaymentValue;
    });
  }

  toggleSelect(player) {
    this.selection.toggle(player);
    this.finalRenewal = 0;
    this.dataLoader.getTeam(this.teamId).finBalance.seasons.find((season) => {
      return season.season === '2023-24';
    }).outings.renewals || 0;
    this.selection.selected.forEach((player) => {
      this.finalRenewal += player.nextPaymentValue;
    });
  }
}
