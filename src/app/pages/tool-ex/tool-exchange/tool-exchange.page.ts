import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';
import { Player } from '../model/player';
import { ToolService } from '../services/tool.service';

@Component({
  selector: 'app-tool-exchange',
  templateUrl: './tool-exchange.page.html',
  styleUrls: ['./tool-exchange.page.scss'],
})
export class ToolExchangePage implements ViewWillEnter {
  firstTeamName: string;
  secondTeamName: string;
  firstTeamId: number;
  secondTeamId: number;

  firstTeam: Array<Player> = [];
  secondTeam: Array<Player> = [];

  firstTeamValues: Array<Player> = [];
  secondTeamValues: Array<Player> = [];

  extra1: number = 0;
  extra2: number = 0;

  @ViewChild('firstTeamTable') firstTeamTable: MatTable<Player>;
  @ViewChild('secondTeamTable') secondTeamTable: MatTable<Player>;
  @ViewChild('finalFirstTeamTable') finalFirstTeamTable: MatTable<Player>;
  @ViewChild('finalSecondTeamTable') finalSecondTeamTable: MatTable<Player>;

  firstTeamCols: string[] = [
    'role',
    'name',
    'value',
    'contract',
    'length',
    'bonus',
    'remove',
  ];

  finalFirstTeamCols: string[] = ['role', 'name', 'value', 'trend'];

  secondTeamCols: string[] = [
    'role',
    'name',
    'value',
    'contract',
    'length',
    'bonus',
    'remove',
  ];

  finalSecondTeamCols: string[] = ['role', 'name', 'value', 'trend'];

  constructor(
    private service: ToolService,
    private route: ActivatedRoute,
    private dataLoader: DataLoaderService
  ) {}

  ionViewWillEnter() {
    this.route.queryParams.subscribe((params) => {
      if (+params.firstTeamId) {
        this.firstTeamId = +params.firstTeamId;
        this.secondTeamId = +params.secondTeamId;
        this.service.firstTeamId = this.firstTeamId;
        this.service.secondTeamId = this.secondTeamId;
        this.firstTeamName = this.dataLoader.getTeamName(+params.firstTeamId);
        this.secondTeamName = this.dataLoader.getTeamName(+params.secondTeamId);
      } else {
        this.firstTeamId = this.service.firstTeamId;
        this.secondTeamId = this.service.secondTeamId;
        this.firstTeamName = this.dataLoader.getTeamName(this.firstTeamId);
        this.secondTeamName = this.dataLoader.getTeamName(this.secondTeamId);
      }
    });

    this.firstTeam = [];
    this.secondTeam = [];
    this.firstTeamValues = [];
    this.secondTeamValues = [];

    this.service.team1.players.forEach((player) => this.firstTeam.push(player));
    this.service.team2.players.forEach((player) =>
      this.secondTeam.push(player)
    );
    if (this.firstTeam.length != 0) {
      this.firstTeamTable.renderRows();
    }

    if (this.secondTeam.length != 0) {
      this.secondTeamTable.renderRows();
    }
    this.service.computeFinalValues();

    this.service.team1.finalPlayers.forEach((player) => {
      this.firstTeamValues.push(player);
    });
    this.service.team2.finalPlayers.forEach((player) => {
      this.secondTeamValues.push(player);
    });
    if (this.firstTeam.length != 0) {
      this.finalFirstTeamTable.renderRows();
    }
    if (this.secondTeam.length != 0) {
      this.finalSecondTeamTable.renderRows();
    }
    if (this.firstTeamValues.length == 0) {
      this.firstTeamCols = [];
      this.finalFirstTeamCols = [];
    } else {
      this.firstTeamCols = [
        'role',
        'name',
        'value',
        'contract',
        'length',
        'bonus',
        'remove',
      ];
      this.finalFirstTeamCols = ['role', 'name', 'value', 'trend'];
    }

    if (this.secondTeamValues.length == 0) {
      this.secondTeamCols = [];
      this.finalSecondTeamCols = [];
    } else {
      this.secondTeamCols = [
        'role',
        'name',
        'value',
        'contract',
        'length',
        'bonus',
        'remove',
      ];
      this.finalSecondTeamCols = ['role', 'name', 'value', 'trend'];
    }
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

  setFirstExtra() {
    this.service.$extra1.next(this.extra1);
    this.ionViewWillEnter();
  }

  setSecondExtra() {
    this.service.$extra2.next(this.extra2);
    this.ionViewWillEnter();
  }

  remove(player: Player) {
    this.service.remove(player.id);
    this.ionViewWillEnter();
  }
}
