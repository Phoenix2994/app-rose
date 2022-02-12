import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { Player } from 'src/app/pages/tool-ex/model/player';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';
import { EasyToolService } from '../../services/easy-tool.service';
import { TeamSummaryComponent } from './components/team-summary/team-summary.component';

@Component({
  selector: 'app-easy-summary',
  templateUrl: './easy-summary.page.html',
  styleUrls: ['./easy-summary.page.scss'],
})
export class EasySummaryPage implements ViewWillEnter {
  @ViewChildren(TeamSummaryComponent)
  teamComponentChildren: QueryList<TeamSummaryComponent>;
  firstTeamName: string;
  secondTeamName: string;
  firstTeamId: number;
  secondTeamId: number;

  firstTeam: Array<Player> = [];
  secondTeam: Array<Player> = [];

  firstTeamValues: Array<Player> = [];
  secondTeamValues: Array<Player> = [];

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
    private service: EasyToolService,
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
    console.log(this.teamComponentChildren)
    if (this.firstTeam.length != 0) {
      this.teamComponentChildren.first.teamTable.renderRows();
    }

    if (this.secondTeam.length != 0) {
      this.teamComponentChildren.last.teamTable.renderRows();
    }
    this.service.computeFinalValues();

    this.service.team1.finalPlayers.forEach((player) => {
      this.firstTeamValues.push(player);
    });
    this.service.team2.finalPlayers.forEach((player) => {
      this.secondTeamValues.push(player);
    });
    if (this.firstTeam.length != 0) {
      this.teamComponentChildren.first.finalTeamTable.renderRows();
    }
    if (this.secondTeam.length != 0) {
      this.teamComponentChildren.last.finalTeamTable.renderRows();
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
    this.firstTeam = [...this.firstTeam];
    this.secondTeam = [...this.secondTeam];
    this.firstTeamValues = [...this.firstTeamValues];
    this.secondTeamValues = [...this.secondTeamValues];
  }

  setExtra(teamPos: number, extra: number) {
    if (teamPos === 1) {
      this.service.$extra1.next(extra);
    } else {
      this.service.$extra2.next(extra);
    }
    this.ionViewWillEnter();
  }

  remove(playerId: number) {
    this.service.remove(playerId);
    this.ionViewWillEnter();
  }
}
