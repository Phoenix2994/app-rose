import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';
import { BonusList, BONUS_LIST } from '../../enum/bonus-list';
import { Bonus } from '../../model/bonus';
import { Player } from '../../model/player';
import { EasyToolService } from '../../services/easy-tool.service';

@Component({
  selector: 'app-easy-player',
  templateUrl: './easy-player.page.html',
  styleUrls: ['./easy-player.page.scss'],
})
export class EasyPlayerPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EasyToolService,
    private dataLoader: DataLoaderService
  ) {}

  id: string;
  value: string;
  quot: number;
  finalQuot: number;
  contractType: string;
  contractLength: string;
  repaidValue: string;
  repaid: string;
  bonus: string[] = [];

  players: any[];
  playerName: string;
  role: string;

  formFlag = false;

  BONUS_LIST = BONUS_LIST;

  bonusListValue = {};
  bonusList: { key: string; value: string }[];

  ngOnInit() {
    this.bonusList = Object.keys(BonusList).map((key) => ({
      key,
      value: BonusList[key],
    }));
    Object.keys(BonusList).forEach((key) => {
      const bonus = BONUS_LIST.find((b) => b.bonusType === BonusList[key]);
      this.bonusListValue[key] = {
        reward: '0',
      };
      if (bonus.targetFlag) {
        this.bonusListValue[key]['targetFlag'] = true;
      }
    });
    this.contractType = 'def';
    this.repaid = 'no';
    this.id = this.route.snapshot.paramMap.get('id');
    const teamId = +this.route.snapshot.paramMap.get('teamId');
    const playerId = +this.route.snapshot.paramMap.get('playerId');
    this.players = [...this.dataLoader.getTeam(teamId).players].concat(
      this.dataLoader.getTeam(teamId).borrowed,
      this.dataLoader.getTeam(teamId).youth
    );
    let player = this.players.filter((player) => {
      return player.playerId === playerId;
    });
    this.formFlag = true;
    this.value = player[0]['value'].toString();
    this.quot = player[0]['quot'].toString();
    this.finalQuot = player[0]['quot'].toString();
    this.playerName = player[0]['name'];
    this.role = player[0]['role'];
  }

  get bonusListEnum() {
    return BonusList;
  }

  save() {
    let bonus = [];
    this.bonus.forEach((b) =>
      bonus.push(
        new Bonus(
          b,
          +this.bonusListValue[b]['reward'],
          this.bonusListValue[b]['targetFlag'],
          +this.bonusListValue[b]['target'],
          false
        )
      )
    );
    this.service.save(
      +this.id,
      new Player(
        +this.value.replace(/,/g, '.'),
        +this.quot,
        this.contractType,
        this.contractLength,
        bonus,
        this.repaid,
        this.repaidValue ? +this.repaidValue.replace(/,/g, '.') : null,
        this.finalQuot ? +this.finalQuot : +this.quot,
        +this.value.replace(/,/g, '.'),
        null,
        this.playerName ? this.playerName : 'GIOCATORE',
        this.role
      )
    );
    this.router.navigate(['easy-tool/easy-summary']);
  }
}
